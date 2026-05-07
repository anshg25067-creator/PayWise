const express = require('express');
const noteModel = require('./models/post.model');
const app= express();
app.use(express.json());


app.post('/posts',async (req,res)=>{
  const data = req.body;
  noteModel.create({
    title:data.title,
    content:data.content,
  })
  res.status(201).json({
    message:"Post created successfully",
  });
})

app.get('/posts',async (req,res)=>{
  const notes = await noteModel.find();
  res.status(200).json({
    message:"Posts fetched successfully",
    posts:notes});
} )
module.exports = app;