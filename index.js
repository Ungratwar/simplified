const express = require("express");
const app = express();
const conn = require("./db");
const cors =require("cors");



conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);
    }else{
        console.log("Connected to mongooDB");
    }
});
app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/user"));

app.listen(5000, () => {
    console.log("Server  is Start");

})