const express = require("express");
const app = express();

app.use(express.json());

let totalAttendance = [];

// POST → attendance mark
app.post("/mark", (req, res) => {
  const student = req.body.name;

  if (!student) {
    return res.status(400).json({ error: "Name required" });
  }

  const entry = {
    id: totalAttendance.length + 1,
    name: student,
    time: new Date().toLocaleTimeString()
  };

  totalAttendance.push(entry);

  res.json({
    message: "Attendance marked",
    entry
  });
});

// GET → all attendance
app.get("/attendance", (req, res) => {
  res.json(totalAttendance);
});

// GET → attendance by id
app.get("/attendance/:id", (req, res) => {
  const id = Number(req.params.id);

  const record = totalAttendance.find(u => u.id === id);

  if (!record) {
    return res.status(404).json({ error: "Record not found" });
  }

  res.json(record);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
