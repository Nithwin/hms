const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"hostel"
})

app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM login WHERE u_name = ? AND u_password = ? ";
  db.query(sql,[req.body.username,req.body.password],(err,data)=>{
    if(err) {return res.json("error")};

    if(data.length > 0){
      return res.json("Login Succes...")
    }
    else{
      return res.json("No record")
    }
  })
})
app.listen(8081,()=>{
  console.log("Listeniong...");
})

