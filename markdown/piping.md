# Piping

With all of the concepts so far with [events](/docs/events/html),
[flows](/docs/flows.html), [routing](/docs/routing.html),
[middleware](/docs/middleware), [requests](/docs/request.html) and
[responses](/docs/response.html) we can create a new methodology called
**Event Pipes**. This concept deals with passing the `$request` and
`$response` to each handler till all handlers had a chance to deal with it.
At the end, The HTTP Handler will decide how to output it based on the final
response. Piping works out because you choose the events that should fire
off versus a random piece of code, which is how most implement events.

In summary, each handler just uses the `$request` object and incrementally
populates the `$response` object. This implies a rule of etiquette that each
handler should follow.

Data to be processed should exist in `$request['stage']`. This property is
similar to `$_REQUEST`, in that the `$_GET`, `$_POST` and *binded URL
parameters* are already populated respectively in that order.

The above implies that a step should not process any data to be saved
unless it is in the `$request['stage']`. Results are pushed to
`$response['json']` in array form.  Steps that populate the JSON should
populate it using the following format below.

```
<?php
array(
    'error' => false,
    'message' => 'A message',
    'validation' => array(
        'post_title' => 'Cannot be empty'
    )
    'results' => array(
        'post_title' => 'A Title named Foo Bar'
    )
)

```

Steps that populate `$response['json']` should soft push in order for other
steps to further add on to the results.

When the data is ready to be transformed to a readable string output, then
that content should be set in `$response['body']`.
