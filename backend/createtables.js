const { Pool } = require('pg');
const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:toor@localhost:5432/412';
const db = pgp(connectionString);

// Define the CREATE TABLE query
const createTableQuery = `
-- Create 'company' table
CREATE TABLE company (
  company_id SERIAL PRIMARY KEY,
  company_stockpr VARCHAR(255),
  company_taxID VARCHAR(255),
  company_industry VARCHAR(255),
  company_name VARCHAR(255)
);

-- Create 'addresses' table
CREATE TABLE addresses (
  addr_id SERIAL PRIMARY KEY,
  mailing_addr VARCHAR(255),
  company_hqs VARCHAR(255)
);

-- Create 'contact' table
CREATE TABLE contact (
  company_email VARCHAR(255),
  company_phone VARCHAR(20),
  PRIMARY KEY (company_email, company_phone)
);

-- Create 'files' table
CREATE TABLE files (
  file_id SERIAL PRIMARY KEY,
  company_filename VARCHAR(255)
);
`;

// Execute the query
db.none(createTableQuery)
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  })
  .finally(() => {
    pgp.end(); // Close the connection pool
  });
