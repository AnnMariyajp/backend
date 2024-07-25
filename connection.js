const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://annmariyajoyp:AnnJoy@cluster0.wtp5tiq.mongodb.net/project2?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to database');
})
.catch((error)=>{
    console.log(error);
})