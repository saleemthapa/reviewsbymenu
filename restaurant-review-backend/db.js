import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'reviewsbymenu' // Your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

//module.exports = connection;
export default connection;
