const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ArslanAkbar:Sibtulhassantts@test.qvfny.mongodb.net/project?retryWrites=true&w=majority",{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology: true, 
    useFindAndModify:false
}).then(()=>{
    console.log(`Database is connected`);
}).catch(()=>{
    console.log(`no connection`);
})

