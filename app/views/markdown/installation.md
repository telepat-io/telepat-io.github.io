# Installing and running Telepat

### Repositories guide

*   **[Telepat models](https://github.com/telepat-io/telepat-models)**

    The Telepat models library holds core functionality, and exposes a method API that other components (like the endpoint, and the services) can use to interact with the system. Unless developing the core or working on additional services, you sholdn't need to work with this library directly.

    _Available on npm as 'telepat-models'._

*   **[Telepat API](https://github.com/telepat-io/telepat-api)**

    Built on top of [Express](http://expressjs.com/), the API provides web endpoints that allow interacting with Telepat from web and mobile applications. This is a required part of the Telepat stack.

    _Available on npm as 'telepat-api'._

*   **[Telepat services](https://github.com/telepat-io/telepat-worker)**

    This repo is a container for all the services that come pre-packaged with Telepat:

    *   The aggregation service, that actively monitors data changes and generates patches;
    *   The persistence service, that stores updates in the datastore and sends them off to synchronization;
    *   The synchronization services, handling transport for individual platforms.

    The aggregation and persistence services are required parts of the Telepat stack. If no synchronization service is started, Telepat will act like a traditional, non-real-time API platform and simply deliver data snapshots on-demand.

    _Available on npm as 'telepat-worker'._

*   **[Telepat CLI](https://github.com/telepat-io/telepat-cli)**

    A command-line interface that helps with configuring a Telepat instance and managing applications.

    _Available on npm as 'telepat-cli'._

*   **[Telepat Docker files](https://github.com/telepat-io/telepat-docker-compose-files)**

    A set of Docker Compose files for accelerating the deployment of Telepat as well as its dependencies.

*   **Telepat clients**

    Native clients are available for multiple platforms:

    *   [Javascript client](https://github.com/telepat-io/telepat-js), available on npm and bower as 'telepat-js'
    *   [Android client](https://github.com/telepat-io/telepat-android-sdk), available as a Maven dependency
    *   [iOS client](https://github.com/telepat-io/telepat-ios-sdk), available on CocoaPods as 'Telepat'

### Launching dependencies

As of 0.2.8, Telepat requires 3 external dependencies:

*   A messaging broker. Adapters are provided out of the box for [RabbitMQ](https://www.rabbitmq.com/) and [Kafka](http://kafka.apache.org/).
*   A JSON datastore. An adapter for [Elasticsearch](https://www.elastic.co/) is provided.
*   A [Redis](http://redis.io/) instance to hold Telepat state and configuration data.

You can find installation instructions for all components on their respective website.

Alternatively, we provide Docker Compose files to accelerate deployment. The recipes are separated in two components, shared dependencies and the actual Telepat software. Once you have [docker](https://docs.docker.com/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine, here are the steps to get dependencies running:

    git clone https://github.com/telepat-io/telepat-docker-compose-files
    cd telepat-docker-compose-files/shared
    sudo docker-compose up<

This will start up all the infrastructure components.

### Configuration

Telepat needs to create an Elasticsearch index and a series of mappings next. To help you to this, as well as other management tasks, there's a npm package that you can install:

    npm install telepat-cli
    telepat set elasticsearch_host ES_HOST // Run these 2 if Docker is not running on localhost
    telepat set elasticsearch_port ES_PORT // Mac or Windows, for example
    telepat configure elasticsearch

The default hostname is locahost, and the default port is 9200\. If running via docker-machine, you can get the host ip by running `docker-machine ip default`.

### Boot up with Docker

Next, you need to launch the Telepat API and all the other services:

    cd telepat-docker-compose-files/telepat
    sudo docker-compose up

Right now everything should be up and running. The API instance is available on the same IP as your docker machine.

The default ports are 3000 for the API and 80 for the websocket service.

### Get from GitHub

The Telepat backend stack is made up of two components, that will each need configuration when installed from source:

*   The API ([https://github.com/telepat-io/telepat-api](https://github.com/telepat-io/telepat-api)). To start this, simply run

        ./bin/www

    You can also set the PORT environment variable to make the API listen on a port different than the default 3000.
*   The services ([https://github.com/telepat-io/telepat-worker](https://github.com/telepat-io/telepat-worker)). To start, run

        node index.js -t topic_name -i worker_index

    For built-in services, these are the commands to start up:

    *   node telepat-worker/index.js -t aggregation -i 0
    *   node telepat-worker/index.js -t write -i 0
    *   node telepat-worker/index.js -t android_transport -i 0
    *   node telepat-worker/index.js -t ios_transport -i 0
    *   node telepat-worker/index.js -t sockets_transport -i 0

To configure the components, create a 'config.json' file in the root of each directory. You can start from the 'config.example.json' template and fill in your specific parameters / remove configurations for services not in use.

Alternatively, you can configure Telepat using environment variables. Here are the environment vars that you can set:

*   TP_KFK_HOST: Kafka (zoekeeper) server
*   TP_KFK_PORT: Kafka (zoekeeper) server port
*   TP_KFK_CLIENT: Name for the kafka client
*   TP_REDIS_HOST: Redis database server
*   TP_REDIS_PORT: Redis server port
*   TP_MAIN_DB: Name of the main database which to use. Should be the same as the exported variable in telepat-models
*   TP_ES_HOST: Elasticsearch server
*   TP_ES_PORT: Elasticsearch server port
*   TP_AMQP_HOST: RabbitMQ host
*   TP_AMQP_USER: RabbitMQ authentication username
*   TP_AMQP_PASSWORD: RabbitMQ authentication password

# Creating an app

After bootup, you need to create a new administration user account - Telepat CLI can help you setup your new app in no time. Here are the steps you need to take to create a new app:

*   Register a new admin:

        telepat add admin --email EMAIL --password PASSWORD

*   Create the app:

        telepat add app --name APP_NAME --apiKey API_KEY

*   Create at least one context (as a container for your objects):

        telepat add context --contextName CONTEXT_NAME

*   Create a schema file, and feed it into your app, so Telepat knows the types of objects you'll be working with. You need to have a schema that defines at the very least the types of objects; you can optionally also add information about object parameter names or relationships.

        telepat set schema --filename PATH_TO_SCHEMA_JSON --apiKey API_KEY

# Example app

There's a Telepat example app that you can quickly run to test out your deployment. To configure the server side part, you can run

    telepat add demoApp

This will create an admin, create an app and a context and attach the demo schema required for the app. The API key used is "testApiKey". Telepat is ready to go! You can also `telepat list apps` to get a list of all apps for the currently logged-in admin.

Next, let's launch a browser-based client to connect to Telepat. To do that, you need to clone the JavaScript client repository:

    git clone https://github.com/telepat-io/telepat-js.git

Then you need to install all dependencies, so run:

    npm install

Now let's configure the connection to the local instance of Telepat. Go to example/script.js and edit your connect options:

    var connectOptions = {
     apiKey: 'APIKEY',
     appId: 'APPID',
     apiEndpoint: 'http://localhost:3000',
     socketEndpoint: 'http://localhost',
     timerInterval: 150
    };

The apiEndpoint and socketEndpoint are probably fine if you're running Telepat locally (unless you're running in docker-machine, then you need to use the Docker IP), so you need to enter the API key and app ID you set up earlier.

You'll also want to enter your own Facebook application id in example/index.html - set it for web, on http://localhost:3002.

All you need to do next is run the example:

    gulp serve

That's it! You've successfully deployed your first Telepat instance.

# A word on stability

Telepat is beta software. Although specific versions of Telepat are stable and running production applications right now, we are still in the stage of making design and interface decisions based on trials and feedback, so please keep in mind:

*   Some functionalities implemented by the backend components may not be yet implemented in specific clients
*   API endpoints specifications might change

We appreciate support from the community in identifying and fixing issues, so if you run into any trouble, please open up an issue on the proper repo and we'll be quick to help out.
