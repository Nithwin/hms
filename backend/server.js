require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: new MySQLStore({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }),
  resave: false,
  saveUninitialized: false
}));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL server:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = 'SELECT * FROM login WHERE username = ?';
    connection.query(query, [username], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error querying the database' });
      }

      if (results.length > 0) {
        const match = await bcrypt.compare(password, results[0].password_hash);
        if (match) {
          req.session.userId = results[0].id;
          return res.json({ authenticated: true });
        }
      }
      res.status(401).json({ authenticated: false, message: 'Invalid credentials' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

