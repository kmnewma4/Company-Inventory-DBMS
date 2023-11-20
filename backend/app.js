const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'companyinventory',
  password: 'toor',
  port: 5432,
});

app.use(express.json());

// Your API routes go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Get all clients
app.get('/clients', async (req, res) => {
    const result = await pool.query('SELECT * FROM clients');
    res.json(result.rows);
  });
  
  // Add a new client
  app.post('/clients', async (req, res) => {
    const { name, address, contact, fileType } = req.body;
    const result = await pool.query('INSERT INTO clients (name, address, contact, file_type) VALUES ($1, $2, $3, $4) RETURNING *', [name, address, contact, fileType]);
    res.json(result.rows[0]);
  });
  
  // Update a client
  app.put('/clients/:id', async (req, res) => {
    const { id } = req.params;
    const { name, address, contact, fileType } = req.body;
    const result = await pool.query('UPDATE clients SET name=$1, address=$2, contact=$3, file_type=$4 WHERE id=$5 RETURNING *', [name, address, contact, fileType, id]);
    res.json(result.rows[0]);
  });
  
  // Delete a client
  app.delete('/clients/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM clients WHERE id=$1', [id]);
    res.json({ message: 'Client deleted successfully' });
  });
  