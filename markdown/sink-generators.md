# Sink - Generators

- [Generate Module](#module)
- [Generate SQL](#sql)
- [Generate Controllers](#controller)

The kitchen sink comes with a slew of Command Line tools called `faucet`. To find
out what are the available commands run the following in terminal.

```

$ bin/cradle faucet

```

Code Generators are used to help layout a project faster and used generically
written code infrastructure and logic to allow you to focus on custom business rules.

For these instructions we will install a generic post module where its definition
is found in `<project folder name>/schema/post.php`.

<a name="module"></a>
## Generate Module

First run the following command.

```

$ bin/cradle faucet generate-module --schema post

```

This will convert the data file found in `<project folder name>/schema/post.php`
to a code set called a `module` that can be generically used through out your project.
It's important to also run `composer update` right after.

```

$ composer update

```

<a name="sql"></a>
## Generate SQL

The next command will generate SQL files within the module folder and
then install to your database using the versioning updater built in.

```

$ bin/cradle faucet generate-sql --schema post

```

Optionally if you want to populate the SQL we can use the following command.

```

$ bin/cradle faucet populate-sql --module post

```

<a name="controller"></a>
## Generate Controllers

If you want to auto generate an admin for the `post` we can do so with the following command.

```

$ bin/cradle faucet generate-admin --schema post

```

Like wise with a REST controller, it can be done with the following.

```

$ bin/cradle faucet generate-rest --schema post

```
