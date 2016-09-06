# Telepat user management

### Registration
As of 4.2.1, there are three ways of registering and logging into the Telepat backend:
* using a username and password
* using a Facebook authentication token
* using a Twitter authentication token

Keep in mind that:
* users need to register before being able to log in (even for Facebook authentication, you need to call the register route before calling the login route).
* registration is an async process - although it is usually processed almost instantly, sometimes the new user might not be able to log in  after registration.


You can configure Telepat to implement a mail confirmation flow for each registered user account. To do this:
* Set `email_confirmation` to `true` on the application object.
* Set `from_email` to the correct value on the application object.
* Set the `email_templates.confirm_account` key of the application object to the HTML content of the registration confirmation email.
* Set the `email_templates.after_confirm` key of the application object to the HTML that should be rendered after the user clicks on the link in the confirmation email.

### Authentication
On login, Telepat clients receive a JWT token as proof of authentication. They use this to sign all outgoing requests (by setting the `Authorization: Bearer` header).

A previously valid token that has expired can be replaced via the special `user/refresh_token` API route. This can be used to implement persistent login.

After login, the previously registered device executing the login is assigned to the authenticated user. A single user account may have multiple active devices connected at the same time. 

Any objects created by an authenticated user are assigned to him via the `user_id` system key set on the object. You can set model-wide object read and write permissions for different authentication levels by modifying the Telepat app schema.

### Forgot password
