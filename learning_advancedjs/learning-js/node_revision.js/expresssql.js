const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vedant8592',
  database: 'vishwa123'
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL connected 🔥");
});


// 🔹 GET all employees
app.get('/employees', (req, res) => {
  db.query("SELECT * FROM employee_details", (err, result) => {
    if (err) return res.status(500).send(err);

    res.json(result);
  });
});


// 🔹 GET single employee
app.get('/employee/:id', (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM employee_details WHERE Employ_id = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.length === 0) {
        return res.status(404).json({ message: "Employee not found" });
      }

      res.json(result[0]);
    }
  );
});


// 🔹 INSERT employee
app.post('/employee', (req, res) => {
  const { Employ_id, Employ_name, age, salary, city, deapartment } = req.body;

  const sql = `
    INSERT INTO employee_details 
    (Employ_id, Employ_name, age, salary, city, deapartment) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [Employ_id, Employ_name, age, salary, city, deapartment], (err) => {
    if (err) return res.status(500).send(err);

    res.json({ message: "Employee added successfully" });
  });
});


// 🔹 UPDATE employee
app.put('/employee/:id', (req, res) => {
  const id = req.params.id;
  const { Employ_name, age, salary, city, deapartment } = req.body;

  const sql = `
    UPDATE employee_details 
    SET Employ_name=?, age=?, salary=?, city=?, deapartment=? 
    WHERE Employ_id=?
  `;

  db.query(sql, [Employ_name, age, salary, city, deapartment, id], (err) => {
    if (err) return res.status(500).send(err);

    res.json({ message: "Employee updated successfully" });
  });
});


// 🔹 DELETE employee
app.delete('/employee/:id', (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM employee_details WHERE Employ_id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).send(err);

      res.json({ message: "Employee deleted successfully" });
    }
  );
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});