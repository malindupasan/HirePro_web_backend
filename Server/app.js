const express = require("express");
const bodyParser = require("body-parser")
const app=  express();
const CustomerRouter =require('./routes/customer.router')

const CsrRouter=require('./routes/csr.router')

// const UserRoute = require("./routes/user.routes");
// const ToDoRoute = require('./routes/todo.router');
// const app = express();
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use("/",CustomerRouter);

app.use("/",CsrRouter)
// app.use("/",ToDoRoute);
module.exports = app;