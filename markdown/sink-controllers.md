# Sink - Controllers

Controllers can be found in both `app/api/src/controller` and
`app/www/src/controller`. They interact with both the
[templates](/docs/sink-templates.html) and [jobs](/docs/sink-jobs.html)
exclusively. Controllers utilize the [route](/docs/routing.html) construct
and follow a common process.

 1. Validate access
 2. Prepare Data
 3. Trigger jobs
 4. Interpret Response from Jobs
 5. Redirects, calls another route or renders the response content

Controllers can be separated into several `app` folders optionally pairing
with a template folder where applicable depending on your preference of
responsibilities.
