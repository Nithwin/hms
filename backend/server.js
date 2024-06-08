const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"hostel"
})

app.post('/login',(req,res)=>{
  const sql = "SELECT * FROM login WHERE u_name = ? AND u_password = ? ";
  db.query(sql,[req.body.username,req.body.password],(err,data)=>{
    if(err) {
      console.error(err);
      return res.json("error");
    }

    if(data.length > 0){
      return res.json("Login Succes...")
    }
    else{
      return res.json("No record")
    }
  })
})

app.post('/admin',(req,res)=>{
  const sql = "SELECT * FROM login WHERE u_name = ? AND u_password = ? ";
  db.query(sql,[req.body.username,req.body.password],(err,data)=>{
    if(err) {
      console.error(err);
      return res.json("error");
    }

    if(data.length > 0){
      return res.json("Login Succes...")
    }
    else{
      return res.json("No record")
    }
  })
})

app.post('/complain',(req,res)=>{
  const sql = "INSERT INTO complain (title, complaint) VALUES (?, ?)";
  db.query(sql,[req.body.title,req.body.complain],(err,data)=>{
    if(err) {
      console.error(err);
      return res.json("error");
    }

    return res.json("sent");
  })
})

app.post('/leave',(req,res)=>{
  const sql = "INSERT INTO leave_r (s_leave, s_return , s_reason) VALUES (?, ?, ?)";
  db.query(sql,[req.body.leave,req.body.sreturn,req.body.reason],(err,data)=>{
    if(err) {
      console.error(err);
      return res.json("error");
    }

    return res.json("sent");
  })
})
app.post('/attend', (req, res) => {
  const sql = "SELECT present, absent FROM attendance WHERE user_name = ?";
  db.query(sql, [req.body.username], (err, data) => {
    if(err) {
      console.error(err);
      return res.json("error");
    }

    if(data.length > 0) {
      // If attendance data is found, return it
      return res.json(data[0]);
    } else {
      // If no attendance data is found, return a message
      return res.json("No record");
    }
  });
});


app.listen(8081,()=>{
  console.log("Listeniong...");
})

