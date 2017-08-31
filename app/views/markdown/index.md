# Introduction

Telepat is an open-source API platform, designed to deliver information and information updates in real-time to clients, while allowing for flexible deployment and simple scaling.

Let’s break that down:

### Open-source

We believe that the massive proliferation of free software we’ve witnessed in the last decades is changing the face of the world as we know it. Today’s open source components - created, tested and maintained by international communities - are the main driver that stands behind the rise of a myriad of new products and services, that could have never iterated or scaled with such agility without relying on the solid foundations that such components provide.

### API platform

The operations of storing, retrieving and manipulating data constitute the core layer for most of today’s software products. The modern, multi-platform embodiment of this layer is the API. While this is basically an orchestrator between various database, processing and transport services, there is significant effort required in setting up all the connecting boilerplate code. This amount of boilerplate needed makes it unfeasible to test several database components, for example, to find the perfect fit for specific use cases. And while there are now many services and stacks that significantly accelerate this part of development, most of them don’t provide any choice as to the specific components used behind the scenes.

### Real time

The standard model that has powered web services for years now is pull-based - that is, clients ask the server for the information they need and the server responds with a static snapshot of the data that marks the end of the transaction. Refreshing this stale data means the client needs to request all of the information yet again, in another transaction. While this has been sufficient in most cases until now, the rise of the social web and the on-demand economy is marking the transition to a new paradigm, where data needs to be actively pushed from the backend to all subscribing clients in real-time.

### Flexible deployment

Software components that handle backend services have a great value offering for developers, as they significantly reduce the effort required for setting up a new project. However, an equal amount of attention needs to be given to taking those projects from early development to later production stages, where apps need to be deployed on various infrastructures, from self-managed machines to cloud providers. Modularization and flexibility in component choice needs to be complemented by flexibility in deployment options, in order to provide safety and simplicity for the whole project lifecycle.

### Simple scaling

Probably the most important aspect in the design of a system that has real-time ambitions is the ability to rapidly and easily scale each level of the architecture in a mode that’s responsive to the workload the system is instantly under. From the database to the workers serving requests, all of the nodes that make up the system need to have reliable underlying scaling strategies that focus on uptime and availability even in the situation of rapid traffic surges.

# Goals

Telepat is designed as a multi-layer system, with the following main objectives in mind:

* **Horizontal scalling**
  * One of the main reasons our stack is based on nodejs is because nodejs is excellent in this type of cloud system arhitecture
  * Just adding more nodes of the same type should equate in better performance in a more direct way, without hampering the other components or introducing nasty inter-dependencies between the nodes
* **Decoupled components**: each type of node with its specific role
  * For this we decoupled the front-facing API from the rest of the system. While the API only responds to clients, the rest of the components (workers) do all the behind the scenes action: aggregating incoming changes, writing/persisting changes in the database, sorting out what and who receives the notifications and finally sending the notifications themselves
  * This means the **flow** of working with Telepat is **async**
* **Plug'n'play components**
  * One of the main goals of Telepat is to be able to be agnostic in regards to the main database as well as the messaging queue. This way, the developer has a variety of choices and can select the best database and message queue for his application's workload type
* **Easy deployment**
  * With the use of Docker we should be able to deploy a Telepat instance in matter of seconds with all the configurations necessary in place
  * Docker-less automatic deployment should also be present, either remotely or locally
* Telepat aims for **maximal throughput** with **acceptable latency**
* **High-Availability** over **Consistency** (eg: Telepat is eventually consistent in regards to its data)
  * Data is persisted async
* Client platform is **irrelevant**. Telepat doesn't care about the details of the client as long as it knows how it is connected (server-based connections or mobile push notifications)
  * Client SDKs should offer offline modes (local database)
  * Client SDKs should offer a native & easy to use API

# Information design

*   All information in the Telepat system is encoded using **JSON objects**.
*   Object updates are being represented by [**JSON Patches**](https://tools.ietf.org/html/rfc6902) (a variant of it, to support more operations)
*   Objects exist in the scope of **applications** and **contexts/collections**. A single application can contain multiple contexts, and contexts contain multiple objects.
*   All objects belong to specific **types**, defined by an app-level **schema**.
*   **Relationships** between objects may also be defined for filtering purposes. These are basic relationships (no resemblance to RDBMSs) of parent <-> children type
*   A **subscription** is made by a client which tells Telepat that he wants to receive updates on a specific **channel**
*   Advanced **filtering** on these channels may be performed on objects, based on defined properties and relationships. The performance of running advanced filters depends on the component chosen to implement the persistence layer.
*   **ACLs** are defined for each object type. Read or write permissions can be assigned to anonymous devices, logged-in users or administrators.

# Architecture

Telepat implements a microservice architecture, with a messaging broker at the core, orchestrating communications between loosely coupled, highly focused data processing services.

Telepat runs on top of the following set of 3rd party dependencies:

* **The message queue** the backbone of the infrastructure, assures efficient communication between nodes
* **Main database storage** the database where all application objects and related are stored (stored as JSON documents)
* **Caching database with data structures support**: [Redis](https://redis.io/) instance, holding internal Telepat state regarding devices and subscription (and also some caches)

The components that make up the architecture of Telepat are:

* **API**: front-facing component based on [Express.js](https://expressjs.com/); answers to clients requests
* **Aggregator**: A type of worker which aggregates incoming data from the API
* **Writer**: A type of worker which is notified by the aggregators that there's work to be done
* **Transport Manager**: A type of worker which receives the result from the writer and sorts the results according to transport type, device and subscription
* **Client transport**: A group of type of workers which receives the result from the transport managers and sends the notifications to clients

### The API

![](http://docs.telepat.io/images/schema_01@2x.png)

This is the first step and the only entry point in the system, powered by [Express](https://expressjs.com), this is a core component of Telepat and the main entry point to the system. All operations that allow clients to interact with the information are made via HTTP(S) requests to these endpoints. The main operations available are:

* Device registration
* User login and management
* All CRUD operations on application objects (create, get/subscribe, update, delete) and as well reading contexts/collections

The API also expose system administration functionality having its separate endpoints:

* Registering new administrator accounts
* Creating, editing and removing applications
* Creating, editing and removing contexts/collections
* Creating, editing and removing users

The API endpoint acts like an information dispatcher, and communicates directly with:

* The main database to instantly serve a subset (or all) of the requested channel
* The data queue (or the message queue in this context) where data updates are received by the aggregators from the APIs (which in turn saves these changes in Redis and notifies the writers)

### Data Aggregator Service

![](http://docs.telepat.io/images/schema_02@2x.png)

This is the second step of the journey of a data update. Event processing, alert triggering, object tagging or extracting trending content in real-time are examples of what such services can provide.

The aggregation service continuously fetches data updates enqueued in the data broker, and merges them into larger chunks that constantly reflect the latest object states and are ready for persisting and sending to subscribing clients. The chunks are temporarily stored in the caching database complete with information about the affected channels which are eventually being taken care of by writers.

### Data Writer Service

The third step in the process is actually writing changes in the database.

* Notified by the aggregators, these workers will fetch data changes (refered to as deltas from now on) from the caching database.
* It will start with fetching 1 delta, if there are still deltas in the redis key, it will send another message to its own queue to fetch more, in which case the "fetchCount" will double (up to a max of 512 deltas). The fetchCount halves when there aren't any deltas left after the fetch
* Highly tolerable to errors and should not stop on recoverable errors
* Notifies the transport manager service of the result

### Transport Manager Service

The 4th step in the process is all about sorting out the deltans into the devices with the correct subscriptions

* This is an intensive process as the relationship between deltas, devices and subscriptions is m:m so the sort itself has more than 1 step
* It ensure only the device with the correct subscriptions will get the notification
* For each client transport type it will send a message with the result

![](http://docs.telepat.io/images/schema_04@2x.png)

### Client Transport Service

Transport adapters are implemented using 3rd party components or services. There are two types of possible adapters, that serve the purpose of reliably communicating with client devices:

* **Permanent transports**
  * Connection-less transports, where there's no permanent connection between the service and the device
  * The connection rests in 3rd party services like Apple Push Notifications and Google Cloud Messaging
  * These are permanent, and devices will continue to receive notifications until the token expires or the device unsubscribes
* **Volatile transports**
  * These are server based connection-oriented transports
  * Subscriptions based on devices with this type of transport are only valid during the lifetime of the connection itself
* Client transport types supported:
  * Apple Push Notifications
  * Google Cloud Messaging
  * Socket.io

### The Messaging queue

![](http://docs.telepat.io/images/schema_03@2x.png)

The data queue layer intermediates communication between all Telepat components, and has multiple purposes:

* It acts like a buffer for all the object updates signaled by clients, thus enabling the API endpoint to be write-decoupled from the persistence service, to enhance performance and responsiveness.
* It is used for inter node communication regarding the topology of the infrastructure

This layer is implemented using 3rd party components or services (like RabbitMQ or Apache Kafka)

### The Database Service

![](http://docs.telepat.io/images/schema_05@2x.png)

This is implemented using 3rd party components or services that plug into Telepat using adapters. It handles storing and retrieving all information that runs though Telepat. The constraint imposed by this service is using components that support storing JSON objects.

Also, depending on the types of filtering that the application will require, some components may have better performance than others (in doing, for example, full text searches over stored objects).

# Use cases

Telepat is designed to be a best fit for applications that:

*   Are data-driven
*   Need to have data updates instantly reflected in user interfaces
*   Need a solid backend stack that handles all common data operations
*   Require fast development iterations but also need to be able to scale when deployed in production
*   Need to be highly available
*   Need to process large amounts of data operations without downtime and without losing information
*   Require flexibility regarding the choice of software components
*   Require flexibility regarding the infrastructure chosen for production

Some examples of applications that can make good use of Telepat are:

### Second-screen companion apps

Telepat shines when it comes to traffic spikes like ones you get during a popular live tv show, in a companion app that allows interaction. Here's an example of handling common usage scenarios for second-screen apps:

* Users log in to Telepat using their Facebook/Twitter accounts. Shows are represented by contexts inside Telepat, so after login, users start listening for global context changes, as that would signal that a new show is currently available for "check-in".
* Once a context becomes available, users can subscribe to "event" objects on that specific context - that's basically the "check-in" process, after the subscribe, users will be notified of any new events, as they happen live.
* Admins publish events on Telepat, marking importent moments in the show timeline. Events are generic JSON objects, they can be used to encapsulate information about the event
* Besides being able to push second-screen content in real-time to viewers, admins can also allow them to interact by participating on polls. Polls can be special types of events, and could also have a series of extra properties to store the poll choices
* When receiving this special type of event, users are able to vote by creating "answer" type of objects

### IoT, sensor tracking, geo tracking

Any device that talks HTTP can also talk to Telepat. Basic communication (registering, logging in, administration tasks and data objects CRUD) is classically implemented using client-server HTTP requests. Real-time notifications are assured by **volatile transport types**, so they are connection-oriented.

Sensors can individually or collaboratively work on data objects that are replicated in real-time to all subscribing devices, allowing Telepat to achieve:

* Inter-device synchronization and communications, allowing the implementation of logic like blinking a LED when values read from a sensor exceed a certain threshold.
* Data management layer, allowing the collection and search of generic JSON data objects according to rules described by a schema. Telepat can also be scaled to handle large, enterprise-level data volumes coming from many individual sensors.
* Data analysis using a real-time dahboard which extracts aggregated information, metrics and statistics straight from Telepat

### Messaging and chat

Making a public, many to many chat app is simple. But what if you want to build a chat system to allow users to talk 1-on-1 with their Facebook friends? Let's consider an example of two friends, Alice and Bob, doing just that using Telepat. We'll name devices after their users, just to keep thing simple.

* First, Bob logs in to Facebook, and he receives his authentication token.
* Bob then logs in to Telepat, using the authentication token from Facebook.
* When connected, Bob gets a list of his Facebook friends that also have Telepat user accounts (i.e. friends of his that have already logged in to Telepat)
* To initiate a conversation, Bob creates a new "conversation" object, then adds Alice to the array of object owners for the new object. The permissions are set so that the object is only visible for the owners.
* If Alice is also connected (and subscribed to her conversations on Telepat), she is instantly notified about the new conversation with Bob. Here, you could use a boolean on the conversation object to allow Alice to "accept" the request before chatting.
* Two booleans on the conversation object could indicate if anyone is typing at the moment. The second Bob starts typing, he also sets his boolean to true, and that's instantly reflected in Alice's local version of the object, and then in the interface.
* When Bob finishes typing, he'll add a new "message" object to Telepat. Conversations are connected to messages with a "has many" relationship, so Bob will set the parent_id of the new message to the conversation object id.
* Alice is not only subscribed to her conversations, but also to messages for each of those conversations, so she instantly gets a callback notifying her of the new message. Since messages are generic JSON objects, they can be used to encapsulate not just text but also images, videos, maps or any other content.
* Alice also gets notified whenever any object changes, so you might as well allow users to edit their messages as a bonus feature!

### Social gaming

But after hooking up their conversation, why not let them engage more? Here's how Bob and Alice could play a fast game of tic-tac-toe together, using Telepat:

* After logging in with Facebook and connecting to Alice like in the chat example, Bob adds a new message with a specific "type" property value, indicating that he wants to play tic-tac-toe.
* The object has additional properties, modeling each space being marked (and by who) on not. Also, Alice is added to the message object owners, allowing her to make edits on the object.
* Bob and Alice take turns editing properties of the shared object as they mark spaces. They each get instantly notified on any edits to the object, and are able to update the game interface smoothly.
* When one of them wins, why not add some properties on the main conversation object, allowing them to persistently keep score of the games they played?

### On-demand economy

So how would you build your basic Uber-like service, where demand meets supply in real time, over Telepat? Let's look at the flow of data.

* Users log in to Telepat using their Facebook accounts. Every user has access to the object representing his own profile - it's here where you can hold a variable to distinguish "buyers" from "sellers".
* Buyers place orders by creating "order" objects in Telepat. An order contains basic identification information about the customer, plus additional details about the order (like the buyer's geocoordinates, or preferences).
* All sellers are subscribed to orders, and learn about new ones in real time. They could also use a filter on orders, to only get ones issued near them for example.
* Any seller can add "offer" objects in Telepat, containing identification information and offer details. Orders are related to offers with a "has many" relationship, so the offer object will need to have the parent_id value set to the proper order object id.
* Buyers subscribe to offers related to their own orders, and are notified instantly about new ones.
* When a buyer decides for an offer, he can delete the original order object or he can close it, using a status variable - in both cases, all sellers get callbacks about the change, so they know the order has expired.
* The buyer then creates a new "booking" object in Telepat, makes it private and adds the seller user id to the list of the booking's owners. Buyers subscribe to bookings, so the lucky winner instantly knows about his new deal.
* The booking object is then shared between the two users, facilitating real-time exchange between them until the service has been delivered and the process is done.

# Comparison

Like other software components out there, open-source or web services, Telepat is also meant to accelerate the development of modern web and mobile applications, while focusing on providing real-time data update functionalities to developers. Many of these components are easy to use, elegant and solid, but there are a lot of aspects that set them apart, so it always makes sense to investigate what the best solution is for your specific requirements.

Let's take a look at what sets Telepat apart from the most popular existing solutions.

* * *

[![](http://docs.telepat.io/images/firebase-logo.png)](https://www.firebase.com/)

*   Firebase is a service that is very similar to Telepat's interface design, and a point of inspiration for it. Firebase is focused on the backend functionality, is unopinionated on the frontend and can have native clients for specific platforms.
*   Like Telepat, Firebase also supports structured data management, but has an approach based on key path subscribing, which makes complex queries difficult to model data for.
*   Unlike Telepat, Firebase does not support native push notifications for mobile devices or browsers.
*   User authentication is offered by both Firebase and Telepat. However, managing users and relationships between users is not a focus for Firebase, but can be modeled with extra effort using the basic functionalities provided.
*   Firebase is closed-source software.

* * *

[![](http://docs.telepat.io/images/pubnub-logo.png)](https://www.pubnub.com/)

*   PubNub is a global data stream network, offered as a service.
*   PubNub, unlike Telepat, is not concerned with understanding the data it handles, but focuses on delivering it to subscribers across platforms, with extremely low latency.
*   PubNub has no object data models, and is not aware of any changes happening with the data. An extra layer of business logic needs to be added on top of PubNub to handle change syncronization or data querying.
*   Telepat's [synchronization service](#the-synchronization-service) handles dispatching all data changes to corresponding subscribers, in the form of JSON Patch objects. Out of the box Telepat uses Socket.io, but services like PubNub (and other dedicated streaming networks) can also be integrated via adapters, to work together with Telepat and speed up delivery of updates.

* * *

[![](http://docs.telepat.io/images/meteor-logo.png)](https://www.meteor.com/)

*   Meteor is a solution for both frontend and backend development, while Telepat focuses on backend functionality.
*   When using Meteor in the backend, you also need to use it in your frontend app. Telepat lets you use any frontend framework.
*   Decoupling the default Meteor frontend components means using a custom, specific interface (DDP).
*   Meteor is a solution for creating webapps, and running on mobile devices works only via webviews. Telepat enables native clients and native functionality for mobile or embedded.
*   Meteor uses database polling or oplog tailing to provide real-time updates. Telepat monitors and aggregates updates before adding them to the database, thus achieving greater database and overall performance.
*   Telepat is focused on creating individually scalable service layers. Meteor has a traditional, monolith design.
*   Telepat allows using adapters for 3rd party databases, messaging queues and push transports.
