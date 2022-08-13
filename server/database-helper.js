const { Pool } = require("pg");

// Link to ElephantSQL DB
const PG_URI =
  "postgres://yshmmikm:ObU95vX_h66UbwBJujyZtKxIjJlEtTvR@kashin.db.elephantsql.com/yshmmikm";

// Establish connection to DB
const pool = new Pool({
  connectionString: PG_URI,
});

// Query to DB
module.exports = pool;
