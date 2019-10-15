const pg = require("pg");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const databaseurl = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString: databaseurl
});
