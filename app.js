const express= require('express');
const ejs= require('ejs')

app= express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("home");  
})
app.get("/project",function(req,res){
    res.render("project");
});
app.get("/contact",function(req,res){
    res.render("contact");
});
app.listen(3000);