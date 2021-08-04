require('dotenv').config();

// get the client
const mysql = require('mysql');

// create connection to databse mysql
const connection = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'webscraping',
});

// using connection to mysql
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL: ', err);
  } else {
    console.log('Connection established');
  }
});

module.exports = connection;
