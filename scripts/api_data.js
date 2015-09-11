define({ "api": [
  {
    "type": "post",
    "url": "/admin/add",
    "title": "Create",
    "description": "<p>Creates a new admin</p> ",
    "name": "AdminAdd",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Admin e-mail</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Real name of the admin</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"email@example.com\",\n\t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\",\n\t\"name\": \"General Specific\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Admin account with that email address already exists or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Error adding account\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"icon\": \"fa-bullhorn\",\n\t\"name\": \"The Voice\",\n\t\"keys\": [\n\t\t\"3406870085495689e34d878f09faf52c\"\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t \"admin_id\": \"email@example.com\",\n\t\t \"icon\": \"fa-bullhorn\",\n\t\t \"name\": \"The Voice\",\n\t\t \"type\": \"application\",\n\t\t \"keys\": [\n\t\t \t\"3406870085495689e34d878f09faf52c\"\n\t\t ]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not add app\"\n}",
          "type": "json"
        }
      ]
    },
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"App removed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Application with that ID doesn't exist or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not remove app\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the app to update</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"name\": \"New name\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Application with that ID doesn't exist or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not update app\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/apps",
    "title": "Applications",
    "description": "<p>Lists the application for the current admin</p> ",
    "name": "AdminApps",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"20\": {\n\t\t \t\"admin_id\": \"email@example.com\",\n\t\t \t\"icon\": \"fa-bullhorn\",\n\t\t \t\"name\": \"The Voice\",\n\t\t \t\"type\": \"application\",\n\t\t \t\"keys\": [\n\t\t \t\t\"3406870085495689e34d878f09faf52c\"\n\t\t \t]\n\t\t},\n\t\t...\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Authenticate",
    "description": "<p>Authenticates an admin and returns the authorization token</p> ",
    "name": "AdminAuthenticate",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of admin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password of admin</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"email@example.com\",\n\t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\ttoken: \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t}\n}",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 401,\n\t\"message\": \"Wrong user or password\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"name\": \"Episode 2\",\n\t\"meta\": {\"info\": \"some meta info\"}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"name\": \"Episode 2\",\n\t\t\"state\": 0,\n\t\t\"meta\": {\"info\": \"some meta info\"},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\" 500,\n\t\"message\": \"Could not add context\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/user/delete",
    "title": "Deleteuser",
    "description": "<p>Deketes an user from an app</p> ",
    "name": "AdminDeleteUser",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of an user from an app</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"user@example.com\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>NotFound If the App ID doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "AdminGetContext",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"name\": \"Episode 1\",\n\t\t\"state\": 0,\n\t\t\"meta\": {},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not get context\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/contexts",
    "title": "GetContexts",
    "description": "<p>Get all contexsts</p> ",
    "name": "AdminGetContexts",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [{\n\t\t\"name\": \"Episode 1\",\n\t\t\"state\": 0,\n\t\t\"meta\": {},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t},\n\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not get contexts\"\n}",
          "type": "json"
        }
      ]
    },
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "\t{\n\t\t\"status\": 200,\n\t\t\"content\" :{\n\t\t\t\"answer\": {\n  \t\t\"namespace\": \"answers\",\n  \t\t\"type\": \"answer\",\n  \t\t\"properties\": {},\n  \t\t\"belongsTo\": [\n    \t\t\t{\n      \t\t\t\"parentModel\": \"event\",\n      \t\t\t\"relationType\": \"hasSome\"\n    \t\t\t}\n  \t\t],\n  \t\t\"read_acl\": 6,\n  \t\t\"write_acl\": 6,\n  \t\t\"meta_read_acl\": 6\n\t\t},\n\t\t...\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/users",
    "title": "GetAppusers",
    "description": "<p>Gets all users of the app</p> ",
    "name": "AdminGetUsers",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : [\n\t\t{//user props}, ...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>NotFound If the App ID doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/me",
    "title": "Me",
    "description": "<p>Gets information about the logged admin</p> ",
    "name": "AdminMe",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t  \t\"id\": 3,\n\t  \t\"email\": \"email@example.com\",\n\t  \t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\",\n\t  \t\"name\": \"General Specific\",\n\t  \t\"isAdmin\": true\n\t}\n}",
          "type": "json"
        }
      ]
    },
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to remove</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Context not found or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\" 500,\n\t\"message\": \"Could not remove context\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"email@example.com\",\n\t\"password\": \"d1e6b0b6b76039c9c42541f2da5891fa\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Admin account with that e-mail address doesn't exist or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Error description\"\n}",
          "type": "json"
        }
      ]
    },
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to update</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1,\n\t\"name\": \"new name\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Context not found or internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"status\": 500,\n\t\"message\": \"Could not update context\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Updated schema object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"schema\": \"see example at /schemas\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>NotFound If the App ID doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/user/update",
    "title": "EditUser",
    "description": "<p>Updates an user from an app</p> ",
    "name": "AdminUpdateuser",
    "group": "Admin",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>The object that contains the user (must contain the email to identify him)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"user\": {\n\t\t\"email\": \"user@example.com\",\n\t\t\"name\": \"New Name\"\n\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : [\n\t\t{//user props}, ...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "GetContext",
    "group": "Context",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t\"name\": \"Episode 1\",\n\t\t\t\"state\": 0,\n\t\t\t\"meta\": {},\n\t\t\t\"type\": \"context\",\n\t\t\t\"application_id\": \"20\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"message\": \"Could not get context\"\n\t\"status\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/context.js",
    "groupTitle": "Context"
  },
  {
    "type": "get",
    "url": "/context/all",
    "title": "GetContexts",
    "description": "<p>Get all contexsts</p> ",
    "name": "GetContexts",
    "group": "Context",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t\"name\": \"Episode 1\",\n\t\t\t\"state\": 0,\n\t\t\t\"meta\": {},\n\t\t\t\"type\": \"context\",\n\t\t\t\"application_id\": \"20\"\n\t\t},\n\t\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "Error",
            "description": "<p>Internal server error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"message\": \"Could not get contexts\",\n\t\"status\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/context.js",
    "groupTitle": "Context"
  },
  {
    "type": "post",
    "url": "/device/register",
    "title": "Register",
    "description": "<p>Registers a new device or updates an already existing one. If device udid is supplied in info it will try to search for a device with this udid and return the device id.</p> ",
    "name": "DeviceRegister",
    "group": "Device",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID if you want to update device info, or 'TP_EMPTY_UDID' string when you want to register a new device (a device id will be generated in this case)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Register new device",
        "content": "{\n\t\t\"info\": {\n\t\t\t\"os\": \"Android\",\n\t\t\t\"version\": \"4.4.3\",\n\t\t\t\"sdk_level\": 19,\n\t\t\t\"manufacturer\": \"HTC\",\n\t\t\t\"model\": \"HTC One_M8\",\n\t\t\t\"udid\": \"some unique identifier\"\n\t\t}\n\t\t\"persistent\": {\n  \t\t\"type\": \"android\",\n  \t\t\"token\": \"android pn token\",\n  \t\t\"active\": 1\n\t\t}\n}",
        "type": "json"
      },
      {
        "title": "Update existing device",
        "content": "{\n\t\t\"info\": {\n\t\t\t\"os\": \"Android\",\n\t\t\t\"version\": \"5.0.1\",\n\t\t\t\"sdk_level\": 20,\n\t\t\t\"manufacturer\": \"HTC\",\n\t\t\t\"model\": \"HTC One_M8\"\n\t\t}\n\t\t\"persistent\": {\n  \t\t\"type\": \"android\",\n  \t\t\"token\": \"android pn token\"\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "'Created' Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"identifier\": \"2397bfc7-a3b3-47c0-b677-a4a2eee036e4\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "'Updated' Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Device has been updated\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>The object reperesenting a channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Additional filters to the subscription channel</p> "
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
            "field": "402",
            "description": "<p><code>NotAuthenticated</code>  Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p><code>PermissionDenied</code> If the model requires other permissions other than the ones provided.</p> "
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"context\": 1,\n\t\t\"content\": {\n\t\t\t//object properties\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p><code>NotAuthenticated</code>  Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If application object model doesn't exist</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p><code>PermissionDenied</code> If the model requires other permissions other than the ones provided.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>RequestedContextMissing</code> If context id is missing from the request body</p> "
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to delete</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"id\": 1,\n\t\t\"context\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p><code>NotAuthenticated</code>  Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If <code>id</code> was supplied but object not found.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p><code>PermissionDenied</code> If the model requires other permissions other than the ones provided.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>RequestedContextMissing</code> If context id is missing from the request body</p> "
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
    "description": "<p>Subscribe to an object or a collection of objects (by a filter). Returns a the resulting object(s). Subsequent subscription on the same channel and filter will have no effect but will return the objects.</p> ",
    "name": "ObjectSubscribe",
    "group": "Object",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>Object representing the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Author or parent model filters by ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"channel\": {\n\t\t\t\"id\": 1,\n\t\t\t\"context\": 1,\n\t\t\t\"model\": \"comment\",\n\t\t\t\"parent\": {\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"model\": \"event\"\n\t\t\t},\n\t\t\t\"user\": 2\n\t\t}\n\t\t\"filters\": {\n\t\t\t\"or\": [\n\t\t\t\t{\n\t\t\t\t\t\"and\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"is\": {\n\t\t\t\t\t\t\t\"gender\": \"male\",\n\t\t\t\t\t\t\t\"age\": 23\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"range\": {\n\t\t\t\t\t\t\t\"experience\": {\n\t\t\t\t\t\t\t  \"gte\": 1,\n\t\t\t\t\t\t\t  \"lte\": 6\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t  ]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t  \"and\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"like\": {\n\t\t\t\t\t\t\t\"image_url\": \"png\",\n\t\t\t\t\t\t\t\"website\": \"png\"\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t  ]\n\t\t\t\t\t}\n\t\t\t\t  ]\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t//item properties\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p><code>NotAuthenticated</code> Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If <code>id</code> was supplied but object not found or device is not registered.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>RequestedContextMissing</code> If context id is missing from the request body</p> "
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>Object representing the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Author or parent model filters by ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t//exactly the same as with the subscribe method\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Subscription removed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p><code>NotAuthenticated</code>  Only authenticated users may access this endpoint.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If device hasn't subscribed to this channel or if application model is not valid (doesn't exist)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>RequestedContextMissing</code> If context id is missing from the request body</p> "
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "patch",
            "description": "<p>An array of patches that modifies the object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"id\": 1,\n\t\t\"context\": 1,\n\t\t\"patch\": [\n\t\t\t{\n\t\t\t\t\"op\": \"replace\",\n\t\t\t\t\"path\": \"comment/1/text\",\n\t\t\t\t\"value\": \"some edited text\"\n\t\t\t},\n\t\t\t...\n\t\t],\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p><code>NotAuthenticated</code>  Only authenticated users may access this endpoint</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>NotFound</code> If <code>id</code> was supplied but object not found or application model doesn't exist</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p><code>PermissionDenied</code> If the model requires other permissions other than the ones provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>RequestedContextMissing</code> If context id is missing from the request body</p> "
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
    "description": "<p>Sends a new authentification token to the user. The old token must be provide (and it may or not may not be aleady expired).</p> ",
    "name": "RefreshToken",
    "group": "User",
    "version": "0.1.2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\ttoken: \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
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
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\tstatus: 401,\n\tmessage: \"Token not present or authorization header is invalid\"\n}",
          "type": "json"
        }
      ]
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
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "description": "<p>Log in the user through facebook</p> ",
    "name": "UserLogin",
    "group": "User",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"access_token\": \"fb access token\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t\t\"user\": {\n\t\t\t \"id\": 31,\n\t\t\t\"type\": \"user\",\n\t\t\t\"email\": \"abcd@appscend.com\",\n\t\t\t\"fid\": \"facebook_id\",\n\t\t\t\"devices\": [\n\t\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t\t],\n\t\t\t\"friends\": [],\n\t\t\t\"password\": \"acb8a9cbb479b6079f59eabbb50780087859aba2e8c0c397097007444bba07c0\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>InsufficientFacebookPermissions</code> User email is not publicly available (insufficient facebook permissions)</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login_password",
    "title": "Password login",
    "description": "<p>Logs in the user with a password; creates the user if it doesn't exist</p> ",
    "name": "UserLoginPassword",
    "group": "User",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"user@example.com\",\n\t\"password\": \"magic-password1337\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"content\": {\n\t\t\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t\t\"user\": {\n\t\t\t\"id\": 31,\n\t\t\t\"type\": \"user\",\n\t\t\t\"email\": \"abcd@appscend.com\",\n\t\t\t\"fid\": \"\",\n\t\t\t\"devices\": [\n\t\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t\t],\n\t\t\t\"friends\": [],\n\t\t\t\"password\": \"acb8a9cbb479b6079f59eabbb50780087859aba2e8c0c397097007444bba07c0\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p><code>InvalidCredentials</code> User email and password did not match</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p><code>UserNotFound</code> User with that email address doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/me",
    "title": "Info about logged user",
    "description": "<p>Logs in the user with a password; creates the user if it doesn't exist</p> ",
    "name": "UserLoginPassword",
    "group": "User",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"content\": {\n\t\t\"id\": 31,\n\t\t\"type\": \"user\",\n\t\t\"email\": \"abcd@appscend.com\",\n\t\t\"fid\": \"\",\n\t\t\"devices\": [\n\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t],\n\t\t\"friends\": [],\n\t\t\"password\": \"acb8a9cbb479b6079f59eabbb50780087859aba2e8c0c397097007444bba07c0\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p><code>InvalidCredentials</code> User email and password did not match</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/logout",
    "title": "Logout",
    "description": "<p>Logs out the user removing the device from his array of devices.</p> ",
    "name": "UserLogout",
    "group": "User",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Logged out of device\"\n}",
          "type": "json"
        }
      ]
    },
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
    "url": "/user/register",
    "title": "Register",
    "description": "<p>Registers a new user using a fb token or directly with an email and password</p> ",
    "name": "UserRegister",
    "group": "User",
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from devie/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Facebook Request",
        "content": "{\n\t\"access_token\": \"fb access token\"\n}",
        "type": "json"
      },
      {
        "title": "Client Request (with password)",
        "content": "\n{\n\t\t\"email\": \"example@appscend.com\",\n\t\t\"password\": \"secure_password1337\",\n\t\t\"name\": \"John Smith\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p><code>InsufficientFacebookPermissions</code> User email is not publicly available (insufficient facebook permissions)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p><code>UserAlreadyExists</code> User with that email address already exists</p> "
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
    "version": "0.1.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "patches",
            "description": "<p>Array of patches that describe the modifications</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User updated\"\n}",
          "type": "json"
        }
      ]
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
            "type": "<p>String</p> ",
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