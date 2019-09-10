let faker = require('faker');
let mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'join_us'
});

let data = [];
for (let i = 0; i < 500; i++) {
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

let q = 'INSERT INTO users (email, created_at) VALUES ?'

conn.query(q, [data], (err, result) => {
  if (err) throw err;
  console.log(result)
})
conn.end();