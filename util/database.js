const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodedb",
  password: "Admin@123",
});

module.exports = pool

// console.log("+++++++++++++in DB")
// pool.execute('SELECT * FROM products').then((res) => console.log(res[0]))