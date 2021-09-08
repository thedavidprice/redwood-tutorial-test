# Redwood Tutorial Testing Repo
Final state of Tutorial code running on latest release version. This is where the testing happens.

### Deployed on Netlify
TODO

### Deployed on Vercel
https://redwood-tutorial-test.vercel.app/

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.netlify/functions/*`.

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

To create a development database, you will need to create a `.env` file and include a PostgreSQL environment variable like the `DATABASE_URL` specified in `.env.defaults`, see either:
* [This link](https://community.redwoodjs.com/t/setup-database-with-railway-cli/2025) for instructions on quickly setting up a database on Railway.
* [This link](https://redwoodjs.com/docs/local-postgres-setup.html) for setting up PostgreSQL locally.

After doing that, run the following command:

```terminal
yarn rw prisma migrate dev
```

This will read the schema definition in `api/db/schema.prisma`.
