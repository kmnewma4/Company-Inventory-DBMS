const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_postgres_password',
  port: 5432,
});

// ... rest of your code
