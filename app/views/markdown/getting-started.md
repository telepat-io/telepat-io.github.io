# Getting started with Telepat

### Basic concepts
When developing with Telepat, you will work with data objects, where you can store arbitrary data. Each object has one of a series of types you must predefine, and belongs to a certain collection of objects.

As opposed to traditional APIs that serve still snapshots of application data to clients, you use the Telepat API to create and manage subscriptions. Subscribtions work similarly to classic `get` requests, in that they respond by sending the client the initial state of the queried data. But subscribing to a set of objects also means that the client will get notified (via additional channels like websockets and push notifications) when any value within those objects is changed, and changes will be immediately merged into client state.

Before starting to design your Telepat app, get up to date with the [data fundamentals »](http://docs.telepat.io/data-fundamentals.html).

### Deploying Telepat
Telepat is open source software, so you can install it on your own hardware. You can boot up dependencies and Telepat services individually, or use the available Docker Compose files. Read all about it in the [installation guide »](/installation.html).

### Developing with Telepat
* Use the Telepat API to register with the backend, authenticate users and create subscriptions. The Telepat API is complemented by push transports, like websockets or mobile push notifications. Read more in the [API guide »](http://docs.telepat.io/working-with-telepat.html).
* You can use on of the available Telepat SDKs:
  * [Javascript SDK »](http://docs.telepat.io/js-sdk.html). Available on npm and bower as `telepat-js`.
  * [Android SDK »](http://docs.telepat.io/android-sdk.html). Available from the Maven repo `io.telepat:android-sdk:0.4.0.1`.
  * [iOS SDK »](http://docs.telepat.io/ios-sdk.html). Available on CocoaPods as `Telepat`.

### App tutorial
Learn how to develop a full-fledged chat application, with Facebook login, one-to-one messaging, delivery status and unread notifications, in 600 lines of code. [Read the tutorial »](http://docs.telepat.io/js-tutorial.html).

### Support
* You can get chat support from Telepat developers and users at https://gitter.im/telepat-io
* Document issues using Github:
  * [Telepat models issues](https://github.com/telepat-io/telepat-models/issues);
  * [Telepat API issues](https://github.com/telepat-io/telepat-api/issues);
  * [Telepat worker issues](https://github.com/telepat-io/telepat-worker/issues);
  * [JS SDK issues](https://github.com/telepat-io/telepat-js/issues);
  * [Android SDK issues](https://github.com/telepat-io/telepat-android-sdk/issues);
  * [iOS SDK issues](https://github.com/telepat-io/telepat-ios-sdk/issues);
