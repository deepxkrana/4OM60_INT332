const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'testdb'
});
app.get('/', (req, res) => {
    res.send("Hello from Backend + Database Connected");
});
app.listen(3000, () => {
    console.log("Backend running on port 3000");
});