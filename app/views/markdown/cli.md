# Working with the Telepat CLI

### CLI Basics

The Telepat CLI is available as an npm package that can be installed globally and used as a system command. The CLI aims to provide a tools for the initial configuration of a Telepat instance, before any client apps or dashboards are connected to it.

The usage syntax is documented below. Please note that any parameter value that is used often can be globally set and can then be omitted from the command, like below:

```bash
telepat add context --appId 1234 --contextName "New context"
telepat set appId 1234
telepat add context --contextName "New context"
```

Also, values are automatically remembered when creating new resources. For example, if you use the CLI to create a new admin user, that user will be automatically be used in subsequent calls without the need to specify the credentials each time. In order to see all of the currently globally set values, use the "list configs" command:

```bash
telepat list configs
```

### Available commands

* **configure**
	* **elasticsearch**
	
	This command will create and configure an Elasticsearch index to be used with Telepat. Prior to calling this, you should run 

    ```bash
		telepat set elasticsearch_host <es host>
		telepat set elasticsearch_port <es port>
		telepat configure elasticsearch
    ```

* **set**
	* **schema**
	
	Can be used to update the Telepat schema of an application. 
	Parameters:
		* **appId** - the Telepat application ID
		* **filename** - the path to a json file containing the schema
		* **schemaData** - an alternative to filename, the JSON schema to be set.

* **add**
	* **app**
	
	Can be used to create a new Telepat application.
	Parameters:
		* **name** - the name of the application
		* **apiKey** - an initial API key for the app
		* **admin**
	
	Can be used to create a new Telepat administrator user. 
	Parameters:
		* **email** - the username of the new user
		* **password** - a password to be set
		* **context**
	
	Can be used to create a new Telepat collection.
	Parameters:
		* **appId** - the Telepat application ID
		* **contextName** - the name of the collection
		* **demoApp**
	
	Can be used to create a new Telepat application, pre-configured to work for the chat tutorial app.
* **list**
	* **configs**
	
	Can be used to list all of the currently set global variables.
	* **apps**
	
	Can be used to show all the Telepat applications associated with the current administrator user
	* **contexts**
	
	Can be used to show all the collections in a Telepat application
	
	Parameters:
	* **appId** - the Telepat application ID
