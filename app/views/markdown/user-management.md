# Telepat user management

### Registration
As of 0.4.1, there are three ways of registering and logging into the Telepat backend:
* using a username and password
* using a Facebook authentication token
* using a Twitter authentication token

Keep in mind that:
* users need to register before being able to log in (even for Facebook authentication, you need to call the register route before calling the login route).
* registration is an async process - although it is usually processed almost instantly, sometimes the new user might not be able to log in  after registration.


You can configure Telepat to implement a mail confirmation flow for each registered user account. To do this:
* `email_confirmation` to `true` on the application object.
* `from_email` to a value with the desired "from" email address on the application object.
* `email_templates.confirm_account`: the HTML template for the content of the email sent out on user registration, if `email_confirmation` is true. Use `{CONFIRM_LINK}` as a placeholder for the URL that users will need to access to complete the registration.
* `email_templates.after_confirm` The HTML template for the page that will be generated when the user clicks through the link in the confirmation email. This will be rendered if no deep links are defined for the platform doing the request.

### Authentication
On login, Telepat clients receive a JWT token as proof of authentication. They use this to sign all outgoing requests (by setting the `Authorization: Bearer` header).

A previously valid token that has expired can be replaced via the special `user/refresh_token` API route. This can be used to implement persistent login.

After login, the previously registered device executing the login is assigned to the authenticated user. A single user account may have multiple active devices connected at the same time.

Any objects created by an authenticated user are assigned to him via the `user_id` system key set on the object. You can set model-wide object read and write permissions for different authentication levels by modifying the Telepat app schema.

### Forgot password
You can configure Telepat to implement a mail confirmation flow for each password-forgot request. To do this:

* Set `from_email` to the correct value on the application object.
* `password_reset.deep_link`: If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on a desktop device. The code needed to finalize the password update will be sent as a get parameter, named `code`.
* `password_reset.ios_deep_link`: If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on an iOS device. The code needed to finalize the password update will be sent as a get parameter, named `code`.
* `password_reset.deep_link_android`: If this is defined, the user will be redirected to this URL after clicking through the link in the confirmation email on an Android device. The code needed to finalize the password update will be sent as a get parameter, named `code`.
