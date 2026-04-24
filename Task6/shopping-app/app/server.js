const express = require("express");
const mysql = require("mysql2");

const app = express();

// ✅ Use connection pool instead of single connection
const db = mysql.createPool({
  host: "db",
  user: "user",
  password: "password",
  database: "shop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Retry DB connection until MySQL is ready
function initDB() {
  db.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      item VARCHAR(255)
    )
  `, (err) => {
    if (err) {
      console.log("DB not ready, retrying in 3 sec...");
      setTimeout(initDB, 3000);
    } else {
      console.log("Database ready");
    }
  });
}

initDB();

// Routes
app.get("/add", (req, res) => {
  db.query("INSERT INTO orders (item) VALUES ('product1')", (err) => {
    if (err) {
      return res.send("Insert failed: " + err.message);
    }
    res.send("Order added");
  });
});

app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) {
      return res.send("Fetch failed: " + err.message);
    }
    res.json(results);
  });
});

app.listen(3000, () => console.log("Server running"));