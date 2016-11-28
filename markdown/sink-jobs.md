# Sink - Jobs

All jobs can be found in the `app/core/src/job` folder. Jobs in the sink
are events used to define business logic of your application. The reason
why jobs implements the [event](/docs/events.html) construct is to allow
jobs to be called via CLI or to be queued. Queuing in the sink is also only
considering the event construct.

Jobs in the sink are designed for usage exclusively for
[controllers](/docs/sink-controllers) and have common things about them.

 - Assumes that staged data as in `$request->getStage()` is prepared
 - CRUD based jobs populate the results as in `$response->setResults()`
 - Does not assume you have any services enabled and should fall back politely

However jobs has separate logic for read and write operations.

### Creating

 1. Validate
 2. Insert to database
 3. Create index
 4. Invalidate search cache

### Updating

 1. Validate
 2. Update to database
 3. Update index
 4. Invalidate detail cache for this item
 5. Invalidate search cache

### Remove

 1. Validate
 2. Set item in database to inactive
 3. Remove from index
 4. Invalidate detail cache for this item
 5. Invalidate search cache

### Search

 1. Try to get it from the cache
 2. Try to get it from the index
 3. Try to get it from the database
 4. If the data is from the index or database, then cache it

### Detail

 1. Try to get it from the cache
 2. Try to get it from the index
 3. Try to get it from the database
 4. If the data is from the index or database, then cache it

Other things in jobs can include other non-CRUD based operations like
file uploading and mailing both of which have a commonality of time consuming
operations. Tasks that are similar to these should be considered as a job to
allow for optional queuing in the future.
