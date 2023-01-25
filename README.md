## How To Migrate Databae

1. Create New Model
   `npx sequelize-cli model:generate --env development --name MODEL_NAME --attributes FIELD:DATATYPE`
2. Create Seeder
   `npx sequelize-cli seed:generate --name SEEDER_NAME`
3. Seed Database
   `npm run seed`
4. Migrate Database
   `npm run migrate:up`
5. Migrate Rollback Database
   `npm run migrate:down`
