//require express
const express = require('express');

//define router
const router = express.Router();

//define model schema
const Requester = require("../models/Requester");


//create new donors
router.post("/create/requester", async(req,res)=>{
    const { requesterName,password,address,phoneNumber,email } = req.body;
    Requester.findOne({email,phoneNumber},(err,donor)=>{
        if(err)
            res.status(500).json({message : {msgBody : err, msgError: true}});
        if(donor)
            res.status(400).json({message : {msgBody : "donor is already present", msgError: true}});
        else{
    const newRequester = new Requester({requesterName,password,address,phoneNumber,email});
    newRequester.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : err, msgError: true}});
                else
                res.send(newRequester);
                    //res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            }); }
        });
})

//login donor
router.post("/requester/login", async(req,res)=>{
    const { email,password}=req.body;

    Requester.findOne({email,password},(err,requester)=>{
        if(err)
            res.status(500).json({message : {msgBody : err, msgError: true}});
        if(requester)
        {
            const responseData={
                id:requester._id,
                name:requester.requesterName,
                email:requester.email
            }
            res.send(responseData);
            //res.status(400).json({message : {msgBody : "login successfully", msgError: true}});
        }
           
            
        else{
            res.status(500).json({message : {msgBody : err, msgError: true}});
        }
    }); 
});

//logout
router.get('/donor/logout',(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{donorname : ""},success : true});
}); 

//read the data of registered donors
router.get("/getall/requester",async(req,res)=>{
    try{
        const RequesterData=await Requester.find();
        res.send(RequesterData);
    }catch(e){
        res.send(e);
    }
})

// get individual donor data using id
router.get("/requester/:id",async(req,res)=>{
try{
    const  _id = req.params.id;

    const RequesterData = await Requester.findById(_id);
    if(!RequesterData){
        res.send("Requester not found");
        return res.status(404).send();
    }
    else{
        console.log(RequesterData);
        res.send(RequesterData);
        res.status(200);
    }
}catch(e){
    res.send("donor not found");
    res.status(500).send(e);
}
});

// delete donor by its id
router.delete("/donor/:id",async(req,res)=>{
try{
    const deleteDonor = await Donor.findByIdAndDelete(req.params.id);
    if(deleteDonor){
        res.send("Donor deleted");
        return res.status(200).send();
    }else{
        res.send("Donor not exists");
    }
    //res.send(deleteDonor);
    
}catch(e){
    res.send("Donor not exists");
    res.status(500).send(e);
}
});

// update donor by its id
router.patch("/donor/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const updateDonor = await Donor.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateDonor);
    res.status(200);

}catch(e){
    res.send("Donor not found");
    res.status(404).send(e);
}
});


module.exports=router;