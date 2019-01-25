---
layout: documentation
class: page-docs page-docs-admin-create-schema
title:  "Setting up the API - Working the Admin - Cradle"
description: "Setting up the API in the admin without needing to program anything at all."
menu_title: 2.8. Setting up the API
menu:
  rest: 2.8.1. REST
  webhooks: 2.8.2. Web Hooks
  oauth: 2.8.3. OAuth v2
---
# 2.8. Setting up the API

By default the API schemas will be empty. You can use this SQL script to manually populate it.

[api.sql](https://github.com/CradlePHP/cradle-api/files/2795216/api.txt)

So when you populate the API schemas a new section `/developer/app/search` will be available. This is like Facebook developer portal (but more raw). It also auto creates docs `/developer/docs/scopes` and `/developer/docs/webhooks`.

<a name="rest"></a>
### 2.8.1. REST

There's 3 kinds of rest calls:

 - Public REST call: `/rest/public/profile/search`
 - App REST call: `/rest/public/profile/detail/1?client_id=94341e9d0776b73cc7142cc161faf0e688fdbfb2`
 - User REST call: `/rest/user/app/search?access_token=8cddabc765dbba7cccaa156105af08c04455775c`

You can expect this is following OAuth v2 specs *(as well as Facebook's REST style)* very closely. The following screenshot shows what the form fields are for in `/admin/system/model/rest/create`.

![image](https://user-images.githubusercontent.com/120378/51734253-f652b000-20be-11e9-84dc-b4f89bfb778c.png)

Paths in REST calls can also take route parameters like `/profile/detail/:profile_id` that will also be apart of the event call parameters.

<a name="webhooks"></a>
### 2.8.2. Web Hooks

Then web hooks are like Github's web hooks.

![image](https://user-images.githubusercontent.com/120378/51734233-e3d87680-20be-11e9-9e3d-51bb4f811fe4.png)

When you create a web hook it will then be available to the application to utilize.

```warning
But beware the web hook url given should be valid, or else every time you create a profile, it will be slow *(because it's trying to call that web hook url)*.
```

![image](https://user-images.githubusercontent.com/120378/51734341-331ea700-20bf-11e9-9d45-cb3f23d132df.png)

This way allows to create APIs without needing to program. but, you can also program in your own REST calls and webhooks manually in any `controller.php`. We are not stopping you from doing that.

<a name="oauth"></a>
## 2.8.3. OAuth v2

In `/developer/app/search` you can also try the 3-legged OAuth yourself.

![image](https://user-images.githubusercontent.com/120378/51734476-9d374c00-20bf-11e9-8ef7-2e1c0c20a366.png)

This will redirect you to `/dialog/request?client_id=94341e9d0776b73cc7142cc161faf0e688fdbfb2`. You can use this same URL to authenticate via 3-Legged OAuth. For now, just click `Allow`.

![image](https://user-images.githubusercontent.com/120378/51734763-6d3c7880-20c0-11e9-8ea9-23938c7ff9b7.png)

When your done that it will return you back to the same screen with the same URL except with a code parameter. (ie. `/developer/app/search?code=1234567890`). If you have POST MAN you can call `POST /rest/access?client_id=[your app key]&client_secret=[your app secret]&code=[the code you got earlier]`. That will return session tokens in JSON as in the following.

```
POST /rest/access?client_id= 94341e9d0776b73cc7142cc161faf0e688fdbfb2&client_secret= d490f575cd1c48e1b970bb0427ae4ec2b2636403&code= b75272cbf7edbb7a434f77e904a27beb4fe08be7

{
    "error": false,
    "results": {
        "access_token": "f7b9427a17ad4f083fb109ba382a99ca",
        "access_secret": "9d5b6d575f13f2c14c5fa8cc843c07fd",
        "profile_id": "1",
        "profile_name": "John Doe",
        "profile_created": "2019-01-20 06:43:42"
    }
}
```

<a name="conclusion"></a>
## 2.8.4. Conclusion

This way allows to create APIs without needing to program. you can also program in your own REST calls and web hooks manually. We are not stopping you from doing that. This is for all the basic REST and web hook calls implicitly.
