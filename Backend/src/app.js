const express = require('express');
const noteModel = require('./models/post.model');
const app= express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/posts', async (req, res) => {

  try {

    const createdPost = await noteModel.create({
      username: req.body.username,
      amount: req.body.amount,
      ispaid: req.body.ispaid
    });

    res.status(201).json({
      message: "Post created successfully",
      post: createdPost
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
});
// app.post('/posts',async (req,res)=>{
//   const data = req.body;
//   noteModel.create({
//     username:data.username,
//     amount:data.amount,
//     ispaid:data.ispaid
//   })
//   res.status(201).json({
//     message:"Post created successfully",
//   });
// })

app.get('/posts',async (req,res)=>{
  const notes = await noteModel.find();
  res.status(200).json({
    message:"Posts fetched successfully",
    posts:notes});
} )
module.exports = app;