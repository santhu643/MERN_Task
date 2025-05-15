const express = require("express");
const app = express();
const route = require("./routes");
require("./db");

app.use(express.json());
app.use("/todo",route);



app.listen(3000,()=>{
    console.log("server started");
});