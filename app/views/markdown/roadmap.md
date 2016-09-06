# Server Components

## Implemented

*   Front-facing endpoint. Implemented using [Express](http://expressjs.com), exposes the following functionality:
    *   Administration tasks:
        *   Creating a new administrator account
        *   Logging in as administrator
        *   CRUD for Telepat apps
        *   CRUD for contexts
        *   CRUD for schemas and ACL
    *   Registering new and existing devices (browsers or mobile devices)
    *   Retrieving app contexts
    *   User management tasks:
        *   Authenticating users using Facebook
        *   Authenticating users using Twitter
        *   Authenticating users using username/password
        *   Verifiying account email address by sending email
        *   Resetting the password with email validation
        *   Logging users out
        *   Updating a user profile
        *   Deleting a user profile
    *   Object management tasks:
        *   Subscribing and unsubscribing to basic object channels
        *   Restricting access to object read/write based on user status (anonymous, authenticated, admin)
        *   CRUD for objects
*   The messaging queue layer, currently offering adapters for [Apache Kafka](http://kafka.apache.org) and [RabbitMQ](https://www.rabbitmq.com/).
*   The aggregation queue layer, implemented using [](https://nodejs.org). Currently supports "replace" operations on object properties.
*   The persistence layer, currently offering an adapter for [Elasticsearch](https://www.elastic.co/).
*   The synchronization layer, using the following available transports:
    *   [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)
    *   [Socket.io](http://socket.io/)
    *   [Apple PN Service](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html)

## Coming soon

*   More unit testing!
*   Scalability benchmark and guide to scaling Telepat
*   Subscribing to channels using advanced filters (less than, greater than, equal to and text search operators)
*   Real-time access to a list of a user's currently logged in friends
*   Exposing hooks to allow data-manipulation at the aggregation level
*   Support for developer-defined services
*   [Couchbase](http://www.couchbase.com/) persistence layer implementation
*   Support for "increment" operation, as well as operations for array editing
*   Support for limits/offsets in object subscriptions
*   Support for 3rd party adapters for the messaging queue layer, persistence layer and synchronization transports

## Planned

*   Allowing objects to have multiple owners and to be access-restricted to their owners
*   Real-time access to channel metadata, like instant subscriber or object count
*   Real-time access to a count of all related objects (know how many objects belong to the current one, as defined in the schema)
*   The ability to define "actions" (like, view, bump etc.) that can be executed by users on objects
*   Real-time access to action-related metadata on objects and channels
*   Support for login with Google and GitHub

## Considered

*   Telepat adapters for:
    *   [Amazon SQS](http://aws.amazon.com/sqs/)
    *   [Azure Service Bus](http://azure.microsoft.com/en-us/services/service-bus/)
    *   [PubNub](http://www.pubnub.com)
    *   [Azure DocumentDB](http://azure.microsoft.com/en-us/services/documentdb/)
    *   [Amazon DynamoDB](http://aws.amazon.com/dynamodb/)
    *   [MongoDB](https://www.mongodb.org/)
    *   [RethinkDB](http://rethinkdb.com/)
    *   [Parse](https://parse.com/)

# JavaScript Client

## Implemented

*   Registering new and existing devices
*   Retrieving app contexts
*   User management tasks:
    *   Logging users in using a Facebook token
    *   Logging users out
*   Object management tasks:
    *   Subscribing and unsubscribing to basic object channels
    *   CRUD for objects
*   Update notifications emitted by channel object

## Coming soon

*   Unit testing!
*   Offline data access and synchronization
*   Update notifications emitted by objects themselves
*   Subscribing to channels using advanced filters (less than, greater than, equal to and text search operators)
*   Real-time access to a list of a user's currently logged in friends
*   Support for "increment" operation, as well as operations for array editing
*   Support for limits/offsets in object subscriptions

## Planned

*   Real-time access to channel metadata, like instant subscriber or object count
*   Real-time access to a count of all related objects (know how many objects belong to the current one, as defined in the schema)
*   The ability to define "actions" (like, view, bump etc.) that can be executed by users on objects
*   Real-time access to action-related metadata on objects and channels
