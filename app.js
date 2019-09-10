let faker = require('faker');
let mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'join_us'
});

let q = 'SELECT CURDATE() AS answer';

conn.query(q, (error, results, fields) => {
  if (error) throw error;
  console.log(results[0].answer)
})
conn.end();