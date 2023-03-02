//require express
const express = require('express');

//define models schema
const Medicine = require('../models/Medicine');
const Donor = require('../models/Donor');

//define router
const router = express.Router();


//read the data of registered medicine
router.get("/medicine",async(req,res)=>{
    try{
        const medicineData=await Medicine.find();
        res.send(medicineData);
    }catch(e){
        res.send(e);
    }
})

router.post("/createmedicine",async(req,res)=>{
    const { medname,mg,quantity,expiryDate} = req.body;

    const newMadicine = new Medicine({medname,mg,quantity,expiryDate});
    newMadicine.save(err=>{
                if(err)
                    res.status(400).json({message : {msgBody : err, msgError: true}});
                else
                res.send(newMadicine);
                    //res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            }); }
  )

// get individual medicine data using id
router.get("/medicine/:id",async(req,res)=>{
try{
    const  _id = req.params.id;

    const medicineData = await Medicine.findById(_id);
    if(!medicineData){
        res.send("medicine not found");
        return res.status(404).send();
    }
    else{
        res.send(medicineData);
    }
}catch(e){
    res.send("medicine not found");
    res.status(500).send(e);
}
});



router.get("/allmedicine",async(req,res)=>{
    try{
        const medicineData = await Medicine.findAll();
        if(!medicineData){
            res.send("medicine not found");
            return res.status(404).send();
        }
        else{
            res.send(medicineData);
        }
    }catch(e){
        res.send("medicine not found");
        res.status(400).send(e);
    }
    });

// delete medicine by its id
router.delete("/medicine/:id",async(req,res)=>{
try{
    const deleteMedicine = await Medicine.findByIdAndDelete(req.params.id);
    if(deleteMedicine){
        res.send("medicine deleted");
        return res.status(400).send();
    }else{
        res.send("medicine not exist");
    }

    
}catch(e){
    res.send("medicine not exists");
    res.status(500).send(e);
}
});

// update medicine by its id
router.patch("/medicine/:id",async(req,res)=>{
try{
    
    const _id = req.params.id;

    const updateMedicine = await Medicine.findByIdAndUpdate(_id, req.body,{
        new:true
    });

    res.send(updateMedicine);

}catch(e){
    res.send("medicine not found");
    res.status(404).send(e);
}
});


module.exports=router;
