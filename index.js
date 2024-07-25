
 var express=require('express')
var cors=require('cors')
require('./connection');
const user=require('./model/user');
const product=require('./model/product');
var app=express();
app.use(express.json()); //enabling json format by express
app.use(cors());

app.post('/add',async(req,res)=>{
    try{
        console.log(req.body);
        await user(req.body).save();
        res.send({message:"data added sucessfully"})
   }catch(error){
       console.log(error)
   }
})

app.get('/view',async(req,res)=>{
    try {
        const {Email} = req.query
        var data = await user.findOne({Email})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send('Invalid email id or password\n' + error)
    }
})
app.post('/addpro',async(req,res)=>{
    try{
        console.log(req.body);
        await product(req.body).save();
        res.send({message:"added to cart"})
   }catch(error){
       console.log(error)
   }
})


//   });
app.listen(3040,()=>{
    console.log("port is up and running")
})