define({ "api": [
  {
    "type": "post",
    "url": "/admin/add",
    "title": "Create",
    "description": "<p>Creates a new admin</p> ",
    "name": "AdminAdd",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Admin e-mail</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/add/app",
    "title": "AppCreate",
    "description": "<p>Creates a app for the admin. The request body should contain the app itself.</p> ",
    "name": "AdminAppAdd",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/remove",
    "title": "RemoveApp",
    "description": "<p>Removes an app from the admin.</p> ",
    "name": "AdminAppRemove",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appId",
            "description": "<p>The ID of the app to remove</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/update",
    "title": "UpdateApp",
    "description": "<p>Updates an app</p> ",
    "name": "AdminAppUpdate",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the app to update</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/apps",
    "title": "Applications",
    "description": "<p>Lists the application for the current admin</p> ",
    "name": "AdminApps",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Authenticate",
    "description": "<p>Authenticates an admin</p> ",
    "name": "AdminAuthenticate",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of admin</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of admin</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>If the provided email and password are not correct</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context/add",
    "title": "CreateContext",
    "description": "<p>Creates a new context</p> ",
    "name": "AdminCreateContext",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the application</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "AdminGetContext",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "filename": "./controllers/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "AdminGetContext",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/context/all",
    "title": "GetContexts",
    "description": "<p>Get all contexsts</p> ",
    "name": "AdminGetContexts",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/contexts",
    "title": "GetContexts",
    "description": "<p>Get all contexsts</p> ",
    "name": "AdminGetContexts",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/schemas",
    "title": "GetSchemas",
    "description": "<p>Gets the model schema for an application</p> ",
    "name": "AdminGetSchemas",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the app from which to get the context</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/me",
    "title": "Me",
    "description": "<p>Gets information about the logged admin</p> ",
    "name": "AdminMe",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context/remove",
    "title": "RemoveContext",
    "description": "<p>Removes a context and all associated objects</p> ",
    "name": "AdminRemoveContext",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to remove</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/update",
    "title": "Update",
    "description": "<p>Updates a new admin. Every property in the request body is used to udpate the admin.</p> ",
    "name": "AdminUpdate",
    "group": "Admin",
    "version": "0.0.1",
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context/update",
    "title": "UpdateContext",
    "description": "<p>Updates the context object</p> ",
    "name": "AdminUpdateContext",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to update</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/schema/update",
    "title": "UpdateSchema",
    "description": "<p>Updates the model schema</p> ",
    "name": "AdminUpdateSchema",
    "group": "Admin",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the app of the schema to update</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "props",
            "description": "<p>Model properties</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If the App ID doesn&#39;t exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/device/register",
    "title": "Register",
    "description": "<p>Registers a new device or updates an already existing one.</p> ",
    "name": "DeviceRegister",
    "group": "Device",
    "version": "0.0.1",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/device.js",
    "groupTitle": "Device"
  },
  {
    "type": "post",
    "url": "/object/count",
    "title": "Count",
    "description": "<p>Gets the object count of a certain filter/subscription</p> ",
    "name": "ObjectCount",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "channel",
            "description": "<p>asdsadas</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>If the model requires other permissions other than the ones provided.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/create",
    "title": "Create",
    "description": "<p>Creates a new object</p> ",
    "name": "ObjectCreate",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the object</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>If the model requires other permissions other than the ones provided.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/delete",
    "title": "Delete",
    "description": "<p>Deletes an object</p> ",
    "name": "ObjectDelete",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>If the model requires other permissions other than the ones provided.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/subscribe",
    "title": "Subscribe",
    "description": "<p>Subscribe to an object or a collection of objects (by a filter)</p> ",
    "name": "ObjectSubscribe",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device which is making the request</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filters",
            "description": "<p>Author or parent model filters by ID.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/unsubscribe",
    "title": "Unsubscribe",
    "description": "<p>Unsubscribe to an object or a collection of objects (by a filter)</p> ",
    "name": "ObjectUnsubscribe",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device which is making the request</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filters",
            "description": "<p>Author or parent model filters by ID.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/update",
    "title": "Update",
    "description": "<p>Updates an existing object</p> ",
    "name": "ObjectUpdate",
    "group": "Object",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "patch",
            "description": "<p>An array of patches that modifies the object</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>If the model requires other permissions other than the ones provided.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/user/refresh_token",
    "title": "Refresh Token",
    "description": "<p>Sends a new authentification token to the user. The old token must be provide (and it may or not may not be aleady expired.</p> ",
    "name": "RefreshToken",
    "group": "User",
    "version": "0.0.1",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>If authorization header is missing or invalid.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/delete",
    "title": "Delete",
    "description": "<p>Deletes a user</p> ",
    "name": "UserDelete",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "description": "<p>Log in the user and create it if it doesn&#39;t exist in database.</p> ",
    "name": "UserLogin",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "Logout",
    "description": "<p>Logs out the user removing the device from his array of devices.</p> ",
    "name": "UserLogout",
    "group": "User",
    "version": "0.0.1",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthenticated",
            "description": "<p>Only authenticated users may access this endpoint.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "Update",
    "description": "<p>Updates the user information</p> ",
    "name": "UserUpdate",
    "group": "User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "patches",
            "description": "<p>Array of patches that describe the modifications</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./documentation/main.js",
    "group": "_home_azureuser_octopus_api_documentation_main_js",
    "groupTitle": "_home_azureuser_octopus_api_documentation_main_js",
    "name": ""
  }
] });