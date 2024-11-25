const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require("./db.js");
const cors = require('cors');
const app = express()
const port = 3000


app.use(express.json());
app.use(cors());

app.post('/todo',async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //use async and it is the write way
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async function(req, res) {
    const todos = await todo.find({}); //for this case we need to wait till we get the data so it's important to use async and await
    res.json({
        todos
    })
})

app.put('/completed',async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as done",
    })
})

app.listen(3000);