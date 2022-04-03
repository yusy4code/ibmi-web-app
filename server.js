const express = require("express");
const { getTodos, addTodo } = require("./db");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

port = 3030;

app.get("/", async function (req, res) {
  const todos = await getTodos();
  res.render("index", { todos: todos });
});

app.post("/add", async function (req, res) {
  const todoDesc = req.body.todoDesc;
  await addTodo(todoDesc);
  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server started at port 3030...");
});
