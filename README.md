# Property Booking - Backend

# Required

- Node.js (v10.16.3 or higher)
- yarn / npm
- MySQL (8.0.17)
- nodemon (Install using npm / yarn)

# Installation

- Download the zip / clone the repo
- Run `yarn install` or `npm i` into project directory
- create `.env.development` and `.env.production` in the root of the project and paste the following:

  ```APP_DOMAIN=localhost 
     NODE_ENV=development 
     DB_HOST=127.0.0.1 
     DB_USER=root 
     DB_PASS=mysql_pass_here 
     JWT_SECRET_KEY=123
     ```

# DB setup

- `NODE_ENV=development node_modules/.bin/sequelize db:create --env=development` - create db
- `NODE_ENV=development node_modules/.bin/sequelize db:migrate --env=development` - run migrations
- `NODE_ENV=development node_modules/.bin/sequelize db:seed --env=development` - for initial test data
- `NODE_ENV=development node_modules/.bin/sequelize db:drop --env=development` - drops the db

To start the project run `npm run start:development` to start the project in `localhost:3000`.
