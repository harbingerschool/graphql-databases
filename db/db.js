var mysql = require('mysql');

// mySQL vars
const host = 'localhost';
const user = 'root';
const password = 'r00t';
const database = 'NodeSql';

// connect to mySQL
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
  // insecureAuth: true
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`----------------\nNow connected to\nhost: ${host}\nuser: ${user}\ndatabase: ${database}\n----------------`);
});

export { connection, host, user, database };