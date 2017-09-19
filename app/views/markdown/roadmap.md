# Rough roadmap

## Implemented

* Front-facing endpoint. Implemented using [Express](http://expressjs.com), exposes the following functionality:
  * Administration tasks regardin applications, collections and users
  * Registering new and existing devices (browsers or mobile devices)
  * User management tasks:
    * CRUD operations on the currently logged in user
    * Authenticating users using Facebook
    * Authenticating users using Twitter
    * Authenticating users using username/password
    * Verifiying account email address by sending email
    * Resetting the password with email validation
  * Object management tasks:
    * Subscribing and unsubscribing to basic object channels
    * Restricting access to object read/write based on user status (anonymous, authenticated, admin)
    * CRUD for objects
    * Subscribing to channels using advanced filters (less than, greater than, equal to and text search operators)
    * Support for limits/offsets in object subscriptions
    * Allowing objects to have multiple owners and to be access-restricted to their owners
* The messaging queue, currently offering adapters for [Apache Kafka](http://kafka.apache.org) and [RabbitMQ](https://www.rabbitmq.com/)
* The database, currently offering an adapter for [Elasticsearch](https://www.elastic.co/)
* The notifications layer, using the following available transports:
  * [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)
  * [Socket.io](http://socket.io/)
  * [Apple PN Service](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html)

## Planned

* Expanding Telepat CLI to offer tools for deploying telepat (either remotely or locally)
* Telepat instance supervisor with its own web based dashboard used for monitoring and deploying Telepat
* Implementation of [Couchbase](https://www.couchbase.com/) database adapter
* Implement a formal pipeline for the workers where developers can add their own types of workers as well as pre and post processing functions
* Real-time access to action-related metadata on objects and channels
* Implementing 3rd party logins with [Passport.js](http://passportjs.org/)

## Considered

* Telepat adapters for:
  * [Amazon SQS](http://aws.amazon.com/sqs/) Amazon's messaging queue
  * [Neo4j](https://neo4j.com/) A graph based database
  * [MongoDB](https://www.mongodb.org/)
  * [RethinkDB](http://rethinkdb.com/)
  * [Parse](https://parse.com/)
