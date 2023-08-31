## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# To generate new migration (app should be in running state)

$ npm run migration:generate -- db/migrations/<new migration name>

# To generate run migration (app should be in running state)

$ npm run migration:run

# To generate revert migration (app should be in running state)

$ npm run migration:revert
