const express = require("express");
const cors = require("cors"); // <-- ADD THIS LINE
const app = express();
const port = 3000;

app.use(cors()); // <-- ADD THIS LINE
app.use(express.json());

let tasks = [
  { id: 1, title: "Set up CI/CD", done: true },
  { id: 2, title: "Deploy to EC2", done: false },
];

// Existing Routes
app.get("/", (req, res) => {
  res.send("🚀 Welcome to AutoShip Task API!");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id/done", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.done = true;
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`✅ Task API server running at http://localhost:${port}`);
});
