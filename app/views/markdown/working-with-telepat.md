# Working with Telepat
*Note that the available SDKs handle all the communication with the Telepat server components, as described below, while exposing a simple, native way of working with objects. To enable push notification transports, you will need to [configure your credentials](#configuring-push-notifications).*

### API Basics
You operate with Telepat by sending requests to the API endpoint. You can see a full list of supported methods, along with details about creating requests in the [API reference](http://docs.telepat.io/api-docs.html).

A success response from the API has the following structure:

```json
{
  "status": ..., // Operation result status code - usually, 200 or 202 for success
  "content": ... // Content can be a string, Object or Array, depending on the operation
}
```

An error response from the API has the following structure:

```json
{
  "status": ..., // Operation error status code
  "code": ..., // The code of the error encountered while processing operation
  "message": ... // String describing encountered error
}
```

### Authentication
Some routes require sending additional authentication header parameters in order to work. These parameters are:

| Header name        | Description |
| ------------------ | ----------- |
| X-BLGREQ-SIGN      | SHA256 of a valid application API key |
| X-BLGREQ-APPID     | The unique identifier of the application the request references |
| X-BLGREQ-UDID      | The unique identifier of the device making the request. See [device registration](#device-registration). |
| Authentication     | The JWT token identifying the currently logged in user or admin. |

### Device registration
To register a device with the Telepat backend, you need to follow a two step procedure:

* Call the `/device/register` API route. This gives the backend information on what your device is, and how they can exchange synchronization data. The body of the request should be an object with the following properties:

| Property name      | Description |
| ------------------ | ----------- |
| info               | Contains various device information. |
| info.os            | String representing the device operating system (optional). |
| info.version       | String representing the device OS version (optional). |
| info.manufacturer  | String representing the device manufacturer (optional). |
| info.model         | String representing the device model (optional). |
| info.udid          | Unique device identifier. If applicable, you can set this value instead of the X-BLGREQ-UDID header to make sure that devices that have previously registered get the same identifier back from Telepat. | 
| persistent         | Contains details about persistent connectivity channels (channels that are always active - like push notifications). |
| persistent.type    | The type of persistent transport to use - one of 'ios' or 'android'. |
| persistent.token   | The unique device token for the chosen transport - either the iOS PN token, or the GCM registration token. |
| persistent.active  | Set this to 1 to enable the persistent transport. |

* If the current device is registering for the first time, and has no saved Telepat device identifier, set the `X-BLGREQ-UDID` header to the `TP_EMPTY_UDID` value

* If the device can generate a unique identifier by itself, set that on the `info.udid` key. If not, leave that field empty. Note that this is different than the UDID received from Telepat that is used for the `X-BLGREQ-UDID` request header key.

* The `/device/register` route can give two types of answers:
  * If you've sent a X-BLGREQ-UDID header along with the request, or if you've specified another unique device identifier in the `info.udid` key of the body, Telepat will simply update the data on the existing device;
  * Else, if it's a new device, connecting to Telepat for the first time, a new device identifier will be generated and returned to the client. This should be used from now on to identify all requests made by this device.

* After registration, if the socket transport is required, you need to connect to the socket endpoint and then send a `bind_device` message to the server, with the following content:

    ```json
    {
      device_id: 'DEVICE-ID', // Set this to the UDID received from Telepat on first registration
      application_id: 'APPLICATION-ID' // Set this to the id of the connected app
    }
    ```

### Update notifications
When objects that fall within one of a device's subscriptions are updated, the Telepat backend sends patches back to subscribers, containing deltas that describe the updates made. This allows clients to synchronize their local state with the global one at all times.

Depending on the transport channels that were set as active during device registration, you can receive the patches via push notifications (for mobile devices), or via websockets. If using websockets, patches will be sent together with the `message` event, so you need to create a listener for that specific event.

The structure of a patch object is:

| Property name                  | Description |
| ------------------------------ | ----------- |
| data                           | Root container of the patches descriptor object |
| data.new[]                     | Array containing all individual patches for objects that are newly created |
| data.new[].object              | The newly created object |
| data.new[].subscriptions       | An array of device subscriptions that are affected by the current patch |
| data.new[].timestamp           | Timestamp of when this patch was generated |
| data.new[].application_id      | The application id of the new object |
| data.deleted[]                 | Array containing all individual patches for objects that are deleted |
| data.deleted[].object          | The deleted object |
| data.deleted[].subscriptions   | An array of device subscriptions that are affected by the current patch |
| data.deleted[].timestamp       | Timestamp of when this patch was generated |
| data.deleted[].application_id  | The application id of the deleted object |
| data.updated[]                 | Array containing all individual patches for objects that are updated |
| data.updated[].patch.op        | The type of update operation applied. As of 0.4.1, this can only be 'replaced' |
| data.updated[].patch.path      | The path of the replaced value, in the `{model_name}/{object_id}/{key}` format. |
| data.updated[].patch.value     | The new value of the property defined in `patch.path` |
| data.updated[].subscriptions   | An array of device subscriptions that are affected by the current patch |
| data.updated[].timestamp       | Timestamp of when this patch was generated |
| data.updated[].application_id  | The application id of the updated object |

Example of an update notification containing a newly created object:

```json
{
   "data":{
      "new":[
         {
            "op":"create",
            "object":{
               "image":null,
               "title":"text",
               "user":null,
               "user_id":"d34d6fc1-bfb7-438d-bba6-8685fec199b2",
               "type":"model",
               "context_id":"e50089d5-a4fc-4997-9eae-af7b7147c8f8",
               "application_id":"5a42d57c-df7c-4a83-a921-7ab2f9f85ae7",
               "id":"5fedc735-c0ac-4f48-85c2-7338048820c3",
               "created":1473175101,
               "modified":1473175101
            },
            "subscriptions":[
               "blg:5a42d57c-df7c-4a83-a921-7ab2f9f85ae7:context:e50089d5-a4fc-4997-9eae-af7b7147c8f8:model"
            ],
            "application_id":"5a42d57c-df7c-4a83-a921-7ab2f9f85ae7",
            "timestamp":1473175082952686
         }
      ],
      "updated":[],
      "deleted":[]
   }
}
```

Example of an update notification containing data updates:

```json
{
   "data":{
      "new":[],
      "updated":[
         {
            "op":"update",
            "subscriptions":[
               "blg:5a42d57c-df7c-4a83-a921-7ab2f9f85ae7:context:e50089d5-a4fc-4997-9eae-af7b7147c8f8:model"
            ],
            "application_id":"5a42d57c-df7c-4a83-a921-7ab2f9f85ae7",
            "timestamp":1473175260988508,
            "patch":{
               "op":"replace",
               "path":"model/5fedc735-c0ac-4f48-85c2-7338048820c3/title",
               "value":"changed text"
            }
         }
      ],
      "deleted":[]
   }
}
```

Example of an update notification containing deleted objects:

```json
{
   "data":{
      "new":[],
      "updated":[],
      "deleted":[
         {
            "op":"delete",
            "object":{
               "application_id":"5a42d57c-df7c-4a83-a921-7ab2f9f85ae7",
               "context_id":"e50089d5-a4fc-4997-9eae-af7b7147c8f8",
               "created":1473175101,
               "id":"5fedc735-c0ac-4f48-85c2-7338048820c3",
               "image":null,
               "modified":1473175279,
               "title":"changed text",
               "type":"model",
               "user":null,
               "user_id":"d34d6fc1-bfb7-438d-bba6-8685fec199b2"
            },
            "subscriptions":[
               "blg:5a42d57c-df7c-4a83-a921-7ab2f9f85ae7:context:e50089d5-a4fc-4997-9eae-af7b7147c8f8:model"
            ],
            "application_id":"5a42d57c-df7c-4a83-a921-7ab2f9f85ae7",
            "timestamp":1473175313919102
         }
      ]
   }
}
```

### Configuring push notifications
To activate persistent transports for mobile devices, Telepat needs to be configured to talk with push notification service providers, like Apple's APN servers and GCM servers. 

Credentials are stored on each individual Telepat app, using the app object that can be accessed and modified by administrators. To do this:

* Set the `apn_pfx` key of the application object to a base-64 encoded ASCII string, created from the .p12 APN certificate, in which each character in the string is treated as a byte of binary data.
* Set the `apn_passphrase` key on the application object to the password required in order to open the .p12 file.
* Set the `gcm_api_key` key on the application object to the API key for the GCM transport.
