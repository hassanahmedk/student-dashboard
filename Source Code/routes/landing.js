import express from "express";
const router = express.Router();

let loggedIn =true;

router.route("/")
.get((req,res)=>{
    
    setTimeout(() => {
        if (loggedIn===true){
            res.render("landing", {aProfileName: "profileName", aProfileID: "profileID"});
    
        } else {
            res.redirect("/");
        }
    }, 1500);
    
    
});
// .post()
// .delete()
// .put();

export default router;



// have to authorizelogin