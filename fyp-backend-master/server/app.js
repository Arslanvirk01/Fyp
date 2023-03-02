//require express
const express = require('express');
const cors = require('cors')
//require database connection
require("../server/db/conn");

//require routes
const donorRouter = require("./routes/Donor");
const medicineRouter = require("./routes/Medicine");
const patientRouter = require("./routes/Patient");
const administratorRouter = require("./routes/Administrator");
const donationRouter = require("./routes/Donation");
const feedbackRouter = require("./routes/Feedback");
const requesterRouter = require("./routes/Requester");
//to avoid undefined data
const app=express();
app.use(cors({
    origin:"*",
    optionsSuccessStatus:200
}))

//port number
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());

// we need to register our router
app.use(requesterRouter);
app.use(donorRouter);
app.use(medicineRouter);
app.use(patientRouter);
app.use(administratorRouter);
app.use(donationRouter);
app.use(feedbackRouter);
//listen port
app.listen(port,()=>{
    console.log(`Server is started at port no ${port}`);
});



