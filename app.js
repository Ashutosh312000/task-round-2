const bodyParser = require('body-parser');
const express=require('express');
const cors=require('cors')
const app=express();
const Sequelize=require('./util/database')

app.use(cors());

app.use(bodyParser.json({extended:false}));

let seats=new Array(20).fill(new Array(20).fill(-1))

app.use('/api/seats/availability',(req,res,next)=>{
    const seatsrequired=req.body.seatsrequired;
    if(seatsrequired==undefined){
        return res.json({message:"Add Some Value"})
    }
    let count;
    let flag=false;
    for(let i=0;i<20;i++){
        count=0;
        
            for(let j=0;j<20;j++){
                if(count<seatsrequired && seats[i][j]==-1){
                    count++;
                }
                else{
                    if(count==seatsrequired){
                        break;
                    }
                    count=0;
                }
                
            }
            if(count==seatsrequired){
                flag=true;
                break;
            }
            
    }
    if(flag==true){
        res.json(seats)
    }
    else{
        res.json([])
    }
    
})

app.use('/api/seats/book',(req,res,next)=>{
    const name=req.body.name
    res.json(name)
})



app.listen(3000);