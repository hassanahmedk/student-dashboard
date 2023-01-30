import studentModel from "../db/student.js";
// import teacherModel from "../db/teacher.js";

let date = new Date(); 
let today = date.getDay() + "-" + parseInt(date.getMonth())+1 + "-" + date.getFullYear(); 

export const authorizeLogin = async (req, res) => {
    try{

        studentModel.insertMany([{
            _id: "S00320",
            firstName: "Hassan Ahmed",
            lastName: "Khan",
            email: "ihassanahmedkhan@gmail.com",
            password: "wowowo",
            dateJoined: today,
            verified: true,
        }])
        .then((user)=>{
            res.send("user added " + user);
        })
     
        // userModel.findById(req.body.username)
        // .then((user)=>{
        //     console.log(user);
        //   if(user === null){
        //         res.json({response:"User Not Found", loginAttempt:false})
        //   } else {
        //     if(user.password === req.body.password){
        //         res.json({response:"Logged In", loginAttempt:true})
        //     } else {
        //         res.json({response:"Password Incorrect", loginAttempt:false})
        //     }
        //   }

        // })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

