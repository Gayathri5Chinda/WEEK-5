/*Schema
Todo{
    title: string;
    description: string;
    completed: boolean
} */

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gayathrichinda54:rCgtrXFShGMeo7or@cluster0.lmz25.mongodb.net/todoSchema")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}