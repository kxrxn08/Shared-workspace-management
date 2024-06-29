const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const userRoutes=require("./routes/userRoutes");
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/user",userRoutes);

const PORT = 9999;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

mongoose.connect("mongodb+srv://karanpatelkpau:pn9H4v6yBzxRnrUB@cluster0.1bhqpyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Shared-Workspace-Management")

mongoose.connection.on("error", function (error) {
  console.log("Error connecting to the database:", error);
});