const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressThymeleaf =  require('express-thymeleaf');
const {TemplateEngine} = require('thymeleaf');
const sqlite3 = require('sqlite3').verbose();
const session = require('express-session');

const app = express();

require("dotenv").config({
  path: path.join(__dirname, "./.env")
 });

const db = new sqlite3.Database('./database.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(40), nom VARCHAR(20),prenom VARCHAR(20),entite VARCHAR(20));");
});


const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');

//Session
app.use(session({secret: process.env.SECRET,saveUninitialized: true,resave: true}));
//PORT
const PORT = process.env.PORT || 3000;   

app.use(bodyParser.urlencoded({ extended: true }));
    
app.get('/', (req,res,next)=>{
  res.render("index");
});

app.post('/login', (req,res,next)=>{
  const {email}=req.body;
  db.serialize(function() {
    db.get('select * from users where email = ?',[email],function (err,row) {
        if (err) {
          return console.log(err.message);
          res.redirect('/');
        } else 
        if(row){
          sess = req.session;
          sess.email = email;
          res.redirect('accueil');
        }else{
          res.render('index', {
            msg: "email dosn't exist"
          });;
        }

      })
  });
});

app.get('/accueil',(req,res,next)=>{
  sess = req.session;
  if(sess.email) {
    res.render('accueil',{
      email:sess.email
    });
  }else {
        res.redirect('/')
      };
});

app.post('/register', (req,res)=>{
  const {email,nom,prenom,entite}=req.body;
  db.serialize(function() {
    db.run('INSERT INTO users(email,nom,prenom,entite) VALUES(?,?,?,?)', [email,nom,prenom,entite], (err) => {
      if(err) {
        return console.log(err.message); 
      }
      console.log('Row was added to the table');
      res.redirect('/');
    })
  });
});

app.get('/register', (req,res)=>{
  res.render("register");
});


app.get('/logout',(req,res) => {
  req.session.destroy((err) => {
      if(err) {
          return console.log(err);
      }
      res.redirect('/');
  });
});

app.get('*', function(req, res){
  res.render('404');
});

app.listen(PORT, () => {
     console.log('Server is listening on Port:', PORT);
   });