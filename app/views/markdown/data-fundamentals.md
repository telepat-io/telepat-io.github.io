# Telepat data fundamentals
## Applications
The highest level of containment for the information you will work with using Telepat is an application. An app groups together client-defined data objects as well as special, system objects (users and collections).

A single Telepat instance can serve data for multiple applications at the same time. No information is shared between apps, including users.

Application descriptors are Telepat objects that belong to the system-reserved `application` type. These can be:
- created by administrator accounts
- read and modified by administrator accounts with permissions on the app

The special keys of an application object are:

| Name                  | Description |
| --------------------- | ----------- |
| keys                  | An array of string values, each representing a valid API key for this application. Clients need to use API keys to communicate with the Telepat backend. |
| admins                | And array of string values, each representing an administrator id. Only admin accounts listed here have access to the app. |
| schema                | The schema descriptor for the current app. |
| type                  | `application` |
|                       | <br/>**Email settings** |
| email_confirmation    | A boolean, true if app should validate new registrations via email confirmation. |
| from_email            | The sender email to use for sending system email, like registration and password update. |
|                       | <br/>**Email/web templates for various actions** |
| email_templates.confirm_account | The HTML template for the content of the email sent out on user registration, if `email_confirmation` is true. Use `{CONFIRM_LINK}` as a placeholder for the URL that users will need to access to complete the registration. |
| email_templates.after_confirm | The HTML template for the page that will be generated when the user clicks through the link in the confirmation email. This will be rendered if no deep links are defined for the platform doing the request. |
| email_templates.weblink | The HTML template for the page that will be generated when the user clicks the link from the reset password email |
| email_templates.reset_password | The HTML template of the email that will be sent to the user when he requests a password reset |
|                       | <br/>**Forgot password confirmation settings** |
| password_reset.deep_link | If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on a desktop device. The code needed to finalize the password update will be sent as a get parameter, named `code`. |
| password_reset.ios_deep_link | If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on an iOS device. The code needed to finalize the password update will be sent as a get parameter, named `code`. |
| password_reset.deep_link_android | If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on an Android device. The code needed to finalize the password update will be sent as a get parameter, named `code`. |
|                       | <br/>**Push notification settings**   |
| apn_key               | The private key issued by Apple |
| apn_key_id               | The ID of the key issued by Apple |
| apn_team_id               | ID of the team associated with the provider token key |
| apn_topic               | The app bundle name |
| apn_passphrase        | The passphrase of the private key file supplied |
| gcm_api_key           | The string API key for the GCM transport. |

## Schema

The application schema helps you structure and define the data your application will be working with. You'll use this structuring to filter through objects and subscribe to updates for specific data your app needs.

The schema object is stored on the `schema` key of the application object. Each key in the schema represents a model and holds an object describing the model's properties.

```js
app.schema = {
  article: {Model},
  comment: {Model}
};
```

### Models
Every object within Telepat belongs to one of a series of admin defined object categories - the models. The main structure of a model descriptor is:

| Key                | Description |
| ------------------ | ----------- |
| belongsTo          | Array of _Relationships_. This is the child.|
| hasMany            | Array of model names. This is the parent.
| meta_read_acl      | Numeric bitmask representing permissions for access to metadata like object count |
| properties         | Descriptor object for model key properties |
| read_acl           | Numeric bitmask representing permissions for reading objects of this type |
| write_acl          | Numeric bitmask representing permissions for updating/deleting objects of this type |
| meta_acl           | Numeric bitmask representing permissions for using the count operation |
| ios_push_field     | When using visible push notifications this field will populate the notification content when objects of this type are created|
| author_fields      | The attributes which will contain the author ID|

This is how we define a _Relationship_:

```js
/**
 * @typedef {{
 *   relationType: string,
 *   parentModel: string
 * }} Relation
 */
```

This is how we describe a model property:

```js
/**
 * @typedef {{
 *   type: string
 * }} Attribute
 */
```

This is metadata, defining properties that keys set on the current object may have. At the moment we don't enforce any attribute types, they are mostly used as guidelines when developing.

Having all that, here's the definition of the model object a schema will have:

```js
/**
 * @typedef {{
 *    meta_read_acl: Number,
 *    read_acl: Number,
 *    write_acl: Number,
 *    properties: <String, Attribute>,
 *    belongsTo: Relation[],
 *    hasMany: string[],
 *    ios_push_field: string,
 *    author_fields: string[]
 * }} Model
 */
```

There are some model names that are special and reserved:

| Name               | Description |
| ------------------ | ----------- |
| application        | Reserved for application descriptor objects. Can only be read and modified by admins. |
| context            | Reserved for collection descriptor objects. Can be read publically, can be modified by admins. |
| user               | Reserved for user descriptor objects. Can be partially read publically, can be read entirely by owner account and can be modified by admins and owner account. |
| admin              | Reserved for admin descriptor objects. Can only be read and modified by owner |
| user_metadata      | Reserved for objects containing user private metadata|

### Relationships
In order for Telepat to properly dispatch data updates to subscribers with specific filters, you need to define relationships between objects (using the application schema). This is not necessarily required, but it is faster than using filters.

* Relationships are simple: one parent, multiple children. A child cannot have multiple parents.
* Use this instead of filters if you want to use filters on relationships between models

### Permissions
Permission keys allow defining read, write and 'meta' access levels for each Telepat object belonging to a certain model. Defined permission types are:

- **read**, meaning the object can be retrieved and subscribed to
- **write**, meaning the object can be updated and deleted
- **meta**, meaning access to the count operation on the model

Permission levels are (in increasing order of bit significance for the bitmask value set for the permission):

- **unauthenticated**, for universal access. This corresponds to the least significant bit of the bitmask value created.
- **authenticated**, for access based on registration with a Telepat user account.
- **admin**, for administrator access.
- **author**, for access given just to object authors. The authors are:
    - the user that created the object;
    - any other user whose id is stored within the object, on a key that's defined in the schema as having the `author` type.

The schema keys defining permissions are:

| Key                | Description |
| ------------------ | ----------- |
| read_acl           | Bitmask corresponding to the read permission levels |
| write_acl          | Bitmask corresponding to the write permission levels |
| meta_read_acl      | Bitmask corresponding to the meta read permission levels |

```js
application.schema.comment.read_acl = 15 // any client can read this
application.schema.comment.meta_read_acl = 6 // only logged in users and admins
application.schema.comment.write_acl = 4 // admins only
application.schema.article.write_acl = 8 // authors only, this overrides the previous bits
```

Having read all that here's a full example of a schema object:

```json
{
  "schema": {
    "chatroom": {
      "properties": {
        "participant_1": {
          "type": "string"
        },
        "participant_2": {
          "type": "string"
        },
        "recipient_is_typing": {
          "type": "bool"
        },
        "sender_is_typing": {
          "type": "bool"
        }
      },
      "read_acl": 7,
      "write_acl": 7,
      "meta_read_acl": 7
    },
    "message": {
      "belongsTo": [
        {
          "parentModel": "chatroom"
        }
      ],
      "properties": {
        "received": {
          "type": "bool"
        },
        "recipient_id": {
          "type": "string"
        },
        "seen": {
          "type": "bool"
        },
        "text": {
          "type": "string"
        }
      },
      "read_acl": 7,
      "write_acl": 7,
      "meta_read_acl": 7,
      "ios_push_field": "text"
    }
  }
}
```

## Objects
All Telepat data is stored within objects, with JSON as the data format of choice. Every object has a type (model) (as defined in the application schema) and exists in a collection.

You can store data on any key of the object, but some keys are reserved and managed by the system.

**System object keys**

| Key                | Description |
| ------------------ | ----------- |
| application_id     | The id of the app this object belongs to |
| context_id         | The id of the collection this object belongs to |
| created            | Timestamp of the date this object was created |
| id                 | The unique identifier assigned to this object |
| modified           | Timestamp of the date this object was last modified |
| type               | The model this object belongs to |
| user_id            | The is of the user/admin that created this object |

## Collections/Contexts
Collections are groups of objects of any model. All Telepat objects belong to a specific collection, so you need to create collections before you can create objects.

Every collection has a descriptor object within Telepat, that's publically available. This works like a regular object, but you can use it to broadcast information that will be synced by default to all clients currently connected to this app.

The collection can contain any data useful for the application.

**Collection object description**

| Key                | Description |
| ------------------ | ----------- |
| application_id     | The id of the app this collection belongs to |
| created            | Timestamp of the date this collection was created |
| id                 | The unique identifier assigned to this collection |
| modified           | Timestamp of the date this collection was last modified |
| type               | `context` |

## Users
Users are represented within Telepat just like regular objects - you can store any key-value data inside a user object.

**User object description**

| Key                | Description |
| ------------------ | ----------- |
| application_id     | The id of the app this user belongs to |
| created            | Timestamp of the date this user registered |
| id                 | The unique identifier assigned to this user |
| modified           | Timestamp of the date this user was last modified |
| type               | `user` |
| username           | The username of the user (if registered via password) |
| password           | The hashed password of the user (if registered via password) |
| fid                | The Facebook ID of the user (if registered via Facebook) |
| tid                | The Twitter handle (if registered via Twitter) |

## User metadata
Users can store private metadata on this object via separate api endpoints

**User metadata object description**

| Key                | Description |
| ------------------ | ----------- |
| application_id     | The id of the app this user belongs to |
| created            | Timestamp of the date this user registered |
| id                 | The unique identifier assigned to this user |
| modified           | Timestamp of the date this user was last modified |
| type               | `user_metadata` |
| user_id           | The ID of the user which this object belongs to|

## Subscribing to data
Telepat clients work with data by creating subscriptions - real-time windows into sets of objects. When subscribing, a client receives not only the initial state of the objects matching the subscription, but also async updates for any modifications made on any of those objects.

Subscriptions are basically object queries, composed of:
- **a channel**, or the basic information about the objects that need to be monitored
- **filters**, additional custom filters for the subscription
- **sorting**
- **pagination**
- **aggregation**

You create a subscription using a descriptor object, with the following keys:

| Key                | Description |
| ------------------ | ----------- |
| channel            | Object describing the subscription channel |
| filters            | Object describing the custom filters applied for the subscription |
| sorting            | Object describing how the subscription results should be sorted |
| offset             | Integer representing the initial offset applied to subscription results |
| limit              | Integer representing the maximum number of objects the subscription should return |

### Channels

Defining a channel is required for creating the subscription. Here are the keys you can set on the channel descriptor object:

| Key                | Description |
| ------------------ | ----------- |
| context            | Set this to an id pointing to the collection of the queried objects. |
| model              | The type of objects to query for. |
| id                 | If querying for a single, specific object, set this key to the value of its id. This is optional. |
| parent.id          | If querying for objects that implement a `belongs to` relationship with objects from other models, set this to the id of the parent object |
| parent.model       | If querying for objects that implement a `belongs to` relationship with objects from other models, set this to the model name of the parent object |
| user               | If querying for objects with a specific author, set this key to the user id of the author. This is optional. |

Here is a simple subscription to all of the articles within a collection:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  }
}
```

Here is a subscription to all of the comments on a specific article:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article",
    "parent": {
      "model": "article",
      "id": "article_id"
    }
  }
}
```

And a subscription to all comments from a specific user:

```json
{
  "channel": {
    "context": "context_id",
    "model": "comment",
    "user": "user_id"
  }
}
```

### Filters
You can expand on the basic queries that a channel allows you to perform using filters. You can define property-level logical conditions that objects must match to become part of the subscription.

There are 3 elementary types of filters implemented: **is**, **range**, **exists**, **in_array** and **like**. You can place any of them under a **not** negation, and connect them using **and** and **or** operators.

##### `and` and `or` operators
Start your filter with one of these two connectors. Both are arrays that can contain filters, `not` filters or other connectors like themselves, to allow defining complex queries.

Here is a channel with the simplest filter, which checks for articles having a _status_ of **draft**

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "and": [
      {
        "is": {
          "status": "draft",
        }
      }
    ]
  }
}
```

**Note**: specifying the **and** or **or** operators is optional, as it will default to **and**. We will omit this operator in the following examples.

##### `is` filter
Use this to look for an object property equal to a specific value. For example:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "is": {
      "queried_key": "queried value"
    }
  }
}
```

##### `range` filter
Use this to look for an object property that's within a range of acceptable values. For example:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "range": {
      "queried_key": {
        "gte": "queried_key must be bigger than this value",
        "lte": "queried_key must be lower than this value"
      }
    }
  }
}
```

Other relational queries for range:
* **gt**: greater than
* **lt**: less than
* **gte**: greater than or equal
* **lte**: less than or equal

##### `like` filter
Use this to look for an object property that contains a specific substring:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "like": {
      "queried_key": "queried contained value"
    }
  }
}
```

##### `not` filter
Use this in combination with the filters above to create negative statements. Simply wrap the sub-filter within a `not` container, like this:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "not": {
      "is": {
        "queried_key": "queried value"
      }
  }
}
```

### Sorting
The sorting object has key names equal to the object key that should be used for sorting. The value of these keys is an object describing the sort operation.

| Key                         | Description |
| --------------------------- | ----------- |
| *sorted_key_name*           | The name of the key to sort by. |
| *sorted_key_name*.order     | The order of the sort - can be `asc` or `desc` |
| *sorted_key_name*.type      | Optional field, describes special sorting types. The only supported value is `geo`. |
| *sorted_key_name*.poi       | If sorting type is `geo`, contains the geocoordinates of the reference location to compute distance to. |
| *sorted_key_name*.poi.lat   | If sorting type is `geo`, contains the latitude of the reference location to compute distance to. |
| *sorted_key_name*.poi.long  | If sorting type is `geo`, contains the longitude of the reference location to compute distance to. |

Example:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "is": {
      "queried_key": "queried value"
    }
  },
  "sort": {
    "key_name": {
      "order": "asc"
    },
    "key_geolocation": {
      "order": "asc",
      "type": "geo",
      "poi": {
        "lat": 0,
        "long": 0
      }
    }
  }
}
```

### Pagination
Set the `offset` and `limit` keys to adjust the padding of the results that the subscription returns. The default value for the `limit` key is 64, while the offset has a default of 0.

Example:

```json
{
  "channel": {
    "context": "collection_id",
    "model": "article"
  },
  "filters": {
    "is": {
      "queried_key": "queried value"
    }
  },
  "sort": {
    "key_name": {
      "order": "asc"
    },
    "key_geolocation": {
      "order": "asc",
      "type": "geo",
      "poi": {
        "lat": 0,
        "long": 0
      }
    }
  },
  "offset": 1024,
  "limit": 256
}
```
