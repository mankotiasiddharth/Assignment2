/********************************************************************************
 * WEB322 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Kunwar Siddharth Mankotia Student ID: 152030227 Date: 30-09-2024
 *
 * Published URL: 
 *
 ********************************************************************************/

const express = require ("express");
require("dotenv").config();
const legoData = require ( "./modules/legoSets");
const app = express();
const PORT = process.env.PORT || 2004;
legoData
.initialize()
.then(()=>{
    app.get("/",(req,res)=>{
        res.send("Assignment 2: Kunwar Siddharth Mankotia - 152030227");
    })
    app.get("/lego/sets",(req,res)=>{
        legoData.getAllSets().then((sets)=>{
            res.json(sets) }).catch((err)=>{
                res.status(500).send(err);
            })   
    });
    app.get("/lego/sets/theme-demo",(req,res)=>{
        console.log("hello")
        legoData.getSetsByTheme("tech").then((set)=>{
            console.log(set)
            res.json(set);
        }).catch((err)=>{
            res.status(404).send(err);
        })
    })
    app.get('/*',(req,res)=>{
        res.send('fucked')
    })
    
    app.get("/lego/sets/num-demo",(req,res)=>{
        legoData.getSetByNum("01-1").then((set)=>{
            res.json(set);
        }).catch((err)=>{
            res.status(404).send(err);
        })
    })
    
    
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    
});



