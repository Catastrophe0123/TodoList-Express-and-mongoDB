const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


//mongoose setup
mongoose.connect("mongodb://127.0.0.1:27017/newTodo");
var todoSchema = mongoose.Schema({
    entry: String,
    completed: { type: Boolean, default: false },
    time: { type: Date, default: Date.now }
});
var Todo = mongoose.model("Todo", todoSchema);


//routes
app.get("/", function (req, res) {
    Todo.find(function (err, todo) {
        if (!err) {
            res.render("todo.ejs", { todo: todo })
        }
    })
})

app.post("/", function (req, res) {
    Todo.create({ entry: req.body.todo.entry, completed: false }, function (err, todo) {
        if (!err) {
            res.redirect("/");
        }
    })
})

app.put("/:id", function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, function (err, todo) {
        if (!err) {
            console.log("todo : ", todo);
            res.redirect("/");
        }
    })
})

app.delete("/:id", function (req, res) {
    Todo.findByIdAndDelete(req.params.id, function (err, todo) {
        if (!err) {
            res.redirect("/");
        }
    })
})

app.listen("3000", function () {
    console.log("server started");
})


