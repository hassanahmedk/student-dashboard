// const { urlencoded, response } = require("express");
// const express = require("express");
// var session = require("express-session");
// var path = require("path");
// const sql = require("mssql");
// const {default:knex} = require("knex");
// const tedious = require("tedious");

import express from "express";
import mongoose from 'mongoose';
import cors from "cors";

import loginRoutes from "./routes/login.js";
import signupRoutes from "./routes/signup.js";
import landingRoutes from "./routes/landing.js";

import * as dotenv from 'dotenv';
dotenv.config();

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();

app.use(cors());

// acting as body-parser
app.use(express.urlencoded({extended:true}));

// Adding stylesheet and other media
app.use(express.static(__dirname));

// EJS
app.set('view engine', 'ejs');

// var notAddedError = "No Error";

// var loginStatus = "";
// var loggedIn = false;
// var loggedInUsername = "NULL";

// var searchName = "";
// var searchID = "";
// var searchSpec = "";
// var searchSalary = "";
// var searchWstatus = "";
// var searchNationility = "";
// var searchManager = "";


// var profileName = "";
// var profileID = "";
// var profileDOB = "";
// var profileCNIC = "";
// var profilePhone = "";
// var profileAddress = "";
// var profileAccNo = "";
// var profileTitle = "";
// var profileSalary = "";
// var profileWstatus = "On-Site";
// var profileNationility = "";
// var profileManager = "";



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.urlencoded({extended:true}));
  
  const mongodbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/cms?retryWrites=true&w=majority&ssl=true`;
  
  mongoose.connect(
    
    mongodbURL, 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
  );
  
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });



app.get("/", function(req,res){
    res.render("login", {pLoginStatus: "loginStatus"});
});


let loggedIn = true;
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/landing', landingRoutes);


app.listen(3000, ()=>{
    console.log("Server at 3000");
})


// app.get("/list", function(req,res){

//     async function doa(){
//         let database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("SELECT dev.DevID, dev.DevFirstName as DeveloperFirstName,dev.DevLastName as DeveloperLastName,m.Mfirstname as ManagerName from Manager as m inner join Developer as dev on m.MID=dev.MID order by m.MID");
//         return query;
//     }
//     doa().then(function(result){
 
//         let rs = result.recordsets[0];

//     res.render("list", {
//         listID1:rs[0].DevID, listDevName1:      rs[0].DeveloperFirstName + " " +   rs[0].DeveloperLastName ,      listManName1:rs[0].ManagerName,
//         listID2:rs[1].DevID , listDevName2:     rs[1].DeveloperFirstName + " " +  rs[1].DeveloperLastName ,   listManName2:rs[1].ManagerName,        
//         listID3:rs[2].DevID , listDevName3:     rs[2].DeveloperFirstName + " " +  rs[2].DeveloperLastName ,   listManName3:rs[2].ManagerName,       
//         listID4:rs[3].DevID , listDevName4:     rs[3].DeveloperFirstName + " " +  rs[3].DeveloperLastName ,   listManName4:rs[3].ManagerName,      
//         listID5:rs[4].DevID , listDevName5:     rs[4].DeveloperFirstName + " " +  rs[4].DeveloperLastName ,   listManName5:rs[4].ManagerName,       
//         listID6:rs[5].DevID , listDevName6:     rs[5].DeveloperFirstName + " " +  rs[5].DeveloperLastName ,   listManName6:rs[5].ManagerName,        
//         listID7:rs[6].DevID , listDevName7:     rs[6].DeveloperFirstName + " " +  rs[6].DeveloperLastName ,   listManName7:rs[6].ManagerName,   
//         listID8:rs[7].DevID , listDevName8:     rs[7].DeveloperFirstName + " " +  rs[7].DeveloperLastName ,   listManName8:rs[7].ManagerName,
//         listID9:rs[8].DevID , listDevName9:     rs[8].DeveloperFirstName + " " +  rs[8].DeveloperLastName ,   listManName9:rs[8].ManagerName,
//         listID10:rs[9].DevID , listDevName10:   rs[9].DeveloperFirstName +" " + rs[9].DeveloperLastName , listManName10:rs[9].ManagerName,
//         listID11:rs[10].DevID , listDevName11:  rs[10].DeveloperFirstName +" " +rs[10].DeveloperLastName ,listManName11:rs[10].ManagerName,
//         listID12:rs[11].DevID , listDevName12:  rs[11].DeveloperFirstName +" " +rs[11].DeveloperLastName ,listManName12:rs[11].ManagerName,
//         listID13:rs[12].DevID , listDevName13:  rs[12].DeveloperFirstName +" " +rs[12].DeveloperLastName ,listManName13:rs[12].ManagerName
//     //    , listID14:rs[13].DevID , listDevName14:  rs[13].DeveloperFirstName +" " +rs[13].DeveloperLastName ,listManName14:rs[13].ManagerName
//     });
// });
    
// });

// app.get("/a", function(req,res){
//     async function doa(){
//         let database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("SELECT dev.DevID, dev.DevFirstName as DeveloperFirstName,dev.DevLastName as DeveloperLastName,m.Mfirstname as ManagerName from Manager as m inner join Developer as dev on m.MID=dev.MID order by m.MID");
//         return query;
//     }
//     doa().then(function(result){
//         res.send(result);
//     });

// });


// app.get("/landing", function(req,res){
    
//     setTimeout(() => {
//         if (loggedIn===true){
//             res.render("landing", {aProfileName: profileName, aProfileID: profileID});
    
//         } else {
//             res.redirect("/");
//         }
//     }, 1500);
    
    
// });


// app.get("/add", function(req,res){
//     setTimeout(() => {
//         if (loggedIn===true){
//             res.render("add", {aProfileName: profileName, aProfileID: profileID});
//         } else {
//             res.redirect("/");
//         }  
//     }, 1500);
// });


// app.get("/search", function(req,res){
//     setTimeout(() => {
//         if (loggedIn===true){
//             res.render("search", {
//                 aProfileName: profileName,
//                 aProfileID: profileID,
//                 pSearchName: searchName,
//                 pSearchID: searchID,
//                 pSearchSpec: searchSpec,
//                 pSearchSalary: searchSalary,
//                 pSearchWstatus: searchWstatus,
//                 pSearchNationility: searchNationility,
//                 pSearchManager: searchManager
//             });
//         } else {
//             res.redirect("/");
//         }
        
//     }, 1500);
// });



// app.get("/profile", function(req,res){


//     setTimeout(() => {
//         if (loggedIn===true){
//             res.render("profile", {
//                 aProfileName: profileName,
//                 aProfileID: profileID,
//                 tName: profileName,      
//                 tID: profileID ,
//                 tDOB: profileDOB ,
//                 tCNIC: profileCNIC,
//                 tPhone: profilePhone ,
//                 tAddress: profileAddress ,
//                 tAccount: profileAccNo ,
//                 tTitle: profileTitle ,
//                 tSalary: profileSalary ,
//                 tWStatus: profileWstatus  ,
//                 tNationility: profileNationility
//                 //t: profileManager 
//             });
//         } else {
//             res.redirect("/");
//         }
        
//     }, 1500);
    
    
// });

// app.get("/ScreenUserNotAdded", function(req,res){
//     res.render("ScreenUserNotAdded");
// });


// app.get("/updateAddress", function(req,res){
//     res.render("updateAddress");
// });


// app.get("/updateAccount", function(req,res){
//     res.render("updateAccount");
// });

// app.get("/listJSON", function(req,res){
//     async function doa(){
//         let database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("SELECT dev.DevID, dev.DevFirstName as DeveloperFirstName,dev.DevLastName as DeveloperLastName,m.Mfirstname as ManagerName from Manager as m inner join Developer as dev on m.MID=dev.MID order by m.MID");
//         return query;
//     }
//     doa().then(function(result){
 
//         res.send(result);
//     })
// });



// app.get("/e", function(req,res){
//     process.exit(1);
// });

// app.get("/test", function(req,res){
//     res.render("ScreenUserAdded");
// });








// app.post("/", function(req,res){
//     let username = req.body.loginUsername;
//     let password = req.body.loginPassword;

//     login(username, password).then(
//         function(result){
//             if(result!==0){ // that means name returned, and no error occured
//                 loggedIn = true; 
//                 console.log(result);
//                 profileName = result.recordsets[0][0].MFirstName +" " + result.recordsets[0][0].MLastName;
//                 profileID = result.recordsets[0][0].MID;
//                 profileDOB = "13-07-2001";
//                 profileCNIC = result.recordsets[0][0].MCNIC;
//                 profilePhone = result.recordsets[0][0].MPhone;
//                 profileAddress = result.recordsets[0][0].MAddress;
//                 profileAccNo = result.recordsets[0][0].MAccount;
//                 profileTitle = result.recordsets[0][0].MSpeciality;
//                 profileSalary = result.recordsets[0][0].MSalary;
//                 profileWstatus = result.recordsets[0][0].MWorkingStatus;
//                 profileNationility = result.recordsets[0][0].MNationility;
//                 profileManager = result.recordsets[0][0].MID;

//                 res.redirect("/landing");
//             } else {
//                 res.redirect("/");
//             }
//         }
//     );   
// });


// // app.get("/", function(req,res){
// //     async function a (){
// //         let database = new sql.ConnectionPool(config);
// //         let data = await database.connect();
// //         let query = await data.query("SELECT * FROM Developer");
// //         return query;
// //     }
// //     a().then(function(a){
// //         res.send(a);

// //     })
// // })

// // app.get("/", function(req,res){
// //     res.render("ScreenUserAdded");
// // })

// app.post("/add", function(req, res){
//     let input = req.body;

    

//     async function doa(){
//         let database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("INSERT INTO Developer VALUES('" + input.devid + "','" + input.cnic +"','" + input.password +"','"+input.fname+"','"+input.lname+"','"+input.address+"','"+input.phone+"','"+input.accno+"',"+input.salary+"," + "'1998-07-23','"+input.fname+input.devid+"@emanage.com.pk', '" +input.nationility+"','"+input.wstatus+"','"+input.speciality+"','"+input.mid+"' )");
//         return query;
//     }
//     doa().then(function(result){

//         if(result.recordsets[0][0].ERR === "ALREADY EXIST" || result.recordsets[0][0].ERR === "INVALID ID"){
//             notAddedError = "This developer ID already exists";
//             res.render("ScreenUserNotAdded");
//         } else {
//             notAddedError = "No Error";
//             res.render("ScreenUserAdded");
//         }

//     }).catch(function(err){
//         console.log(err);
//         res.render("ScreenUserAdded");

//     });

// });

// app.post("/search", function(req, res){
//     let input = req.body.searchQuery;
//     async function doa(){
//         let database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("SELECT * FROM Developer WHERE DevID='" + input + "'");
//         return query;
//     }
//     doa().then(function(result){
//         let output = result.recordsets[0][0];
//         searchName = output.DevFirstName + " " + output.DevLastName;
//         searchID = output.DevID;
//         searchSpec = output.DevSpeciality;
//         searchSalary = output.DevSalary;
//         searchWstatus = output.DevWorkingStatus;
//         searchNationility = output.DevNationility;
//         searchManager = output.MID;
//         res.redirect("/search");
//     }).catch(
//         function(){
//             searchName = "No Results Found!";
//             searchID = "";
//             searchSpec = "";
//             searchSalary = "";
//             searchWstatus = "";
//             searchNationility = "";
//             searchManager = "";
//             res.redirect("/search"); 
//         }
//     );

// });


// app.post("/updateAddress", function(req, res){


//     async function update(){
//         // Accountno and id are variable for update account of manager
//         var database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("UPDATE Manager SET MAddress='"+req.body.address+"' where MID='"+profileID+"'");
//         return query; 
//     }

//     update().then(function(){
//         profileAddress = req.body.address;
//         res.render("ScreenUpdated");
//     });

// });

// app.post("/updateAccount", function(req, res){

//     async function update(){
//         // Accountno and id are variable for update account of manager
//         var database = new sql.ConnectionPool(config);
//         let data = await database.connect();
//         let query = await data.query("UPDATE Manager SET MAccount='"+req.body.account+"' FROM Manager where MID='"+profileID+"'");
//         return query;
//     }

//     update().then(function(){
//         profileAccNo = req.body.account;
//         res.render("ScreenUpdated");
//     })

// });
  




// async function login(username, password){

//     var database = new sql.ConnectionPool(config);
//     let data = await database.connect();
//     let result = await data.query("SELECT * FROM Manager where MID = '" + username + "'");

//         if(result.recordset.length === 0){      // means user doesn't exists as it doesn't return any row
//             loginStatus = "This user doesn't exist";
//             database.close();
//             return 0;

//         } else if(result.recordset[0].MPassword === password){
//             database.close();
//             return result;
//         } else {
//             loginStatus = "You entered an incorrect password";
//             database.close();
//             return 0;
//         }

// }



// async function getData(){

//     return query;
// }


// app.listen(3000, function(){
//     console.log("Server running at port 3000");
// });








































//  /* var database = new sql.ConnectionPool(config);

//   database
//       .connect()
//       .then(pool => {
//           return pool.query("SELECT * FROM Student");
//       }).then(result => {
//           res.send(result);
//           return result;
//           database.close();
//       })

//       .catch((err) => {
//           console.log(err);
//       });*/
  

    
   

//     // SHIT THAT WORKS!!    //

    

//     // function getData(column, table){
//     //     var database = new sql.ConnectionPool(config);
//     //     var ans= 11;
//     //     database
//     //         .connect()
//     //         .then(pool => {
//     //             return pool.query("SELECT " + column + " FROM " + table);
//     //         }).then(result => {
//     //             //console.log(result);
//     //             ans = result.recordsets[0][3].StdNo;
//     //             console.log(ans);
//     //             database.close();
//     //         })
    
//     //         .catch((err) => {
//     //             console.log(err);
//     //         });
//     //         return ans;
    
//     // }




//         // connect to your database
//     //     sql.connect(config, function (err) {
        
//     //         if (err) console.log(err);

//     //         var conn = new sql.ConnectionPool(config);
//     //         // create Request object
//     //         var request = new sql.Request(conn);
            
//     //         // query to the database and get the records
//     //         request.query('select * from Student', function (err, recordset) {
                
//     //             if (err) console.log(err)

//     //             // send records as a response
//     //             res.send(recordset);
                
//     //         });
//     // });





//     // var connection = new sql.ConnectionPool(config);
//     // connection.connect();

//     // var request = new sql.Request(connection);

//     // var sqlquery = "SELECT * FROM Student";
//     // request.query(sqlquery, function (err, recordset) {
//     //     if (err)
//     //     res.send(err);
//     //     else
//     //     res.send(recordset);
//     // });



   
//             // sqlInstance.connect(setUp)
//             //     .then(function () {
//             //         // Function to retrieve all the data - Start
//             //         new sqlInstance.Request()
//             //             .query("select * from Course")
//             //             .then(function (dbData) {
//             //                 if (dbData == null || dbData.length === 0)
//             //                     return;
//             //                 console.dir('All the courses');
//             //                 console.dir(dbData);
//             //             })
//             //             .catch(function (error) {
//             //                 console.dir(error);
//             //         });

                    
//                     // sql.connect(config).then(function (err) {
//                     //     var sqlrequest = new sql.Request();
//                     //     sqlrequest.query("SELECT * from Student").then(function (recordset) {
//                     //         sql.close(function (value) {
//                     //           console.log("connection6 closed");
//                     //         });
//                     //         return res.status(200).send(recordset);
//         // async function getData(column, table){
// //     try{
// //         var database = new sql.ConnectionPool(config);
// //         let data = await database.connect();
// //         let query = await data.pool.query("SELECT " + column + " FROM " + table);
// //         return await sql.pool.result;
        
// //     } catch(e){
// //         return e;
// //     }
//                     //     }).catch(function (err) {
//                     //         console.log(err);
//                     //     });
//                     // }).catch(function (err) { 
//                     //     console.log(err);
//                     // });
                
      
        
      
     
// // }  


// // app.post("/", function(req,res){
//     //     let username = req.body.loginUsername;
//     //     let password = req.body.loginPassword;
    
//     //     // Due to the asynchronous nature of the following code, it can't be used as a returning function
//     //     databaseConnect
//     //         .then(pool => {
//     //             return pool.query("SELECT password FROM UserLogin where username = '" + username + "'");
//     //         }).then(result => {
               
//     //             if(result.recordset.length === 0){      // means user doesn't exists as it doesn't return any row
//     //                 loginStatus = "This user doesn't exist";
//     //                 res.redirect("/");
//     //             } else if(result.recordset[0].password === password){
//     //                 loggedIn = true; 
//     //                 let fname = result.recordsets[0][0].DevFirstName;   // change it acc to orig database
//     //                 let lname = result.recordsets[0][0].DevLastName;    // change it 
//     //                 loggedInUsername = lname + fname;
//     //                 console.log(lname);
//     //                 res.redirect("/landing");
//     //             } else {
//     //                 loginStatus = "You entered an incorrect password";
//     //                 res.redirect("/");
//     //             }
//     //             database.close();
//     //         })
//     //         .catch((err) => {
//     //             console.log(err);
//     //         }); 
    
//     // });