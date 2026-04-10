const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Form UI
app.get("/", (req, res) => {
  res.send(`
    <h2>Student Registration</h2>
    <form method="POST" action="/register">
      <input type="text" name="name" placeholder="Name" required /><br/><br/>
      <input type="text" name="course" placeholder="Course" required /><br/><br/>
      <input type="email" name="email" placeholder="Email" required /><br/><br/>
      <button type="submit">Register</button>
    </form>
  `);
});

// Handle form submission
app.post("/register", (req, res) => {
  const { name, course, email } = req.body;

  res.send(`
    <h3>Registration Successful</h3>
    <p>Name: ${name}</p>
    <p>Course: ${course}</p>
    <p>Email: ${email}</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});