const express = require('express');
const path = require('path');
const user = require("./routes/user.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const InitiateMongoServer = require('./config/mongoose.js');

InitiateMongoServer();

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT,function(err){
    console.log(`Server Started at PORT ${PORT}`);
    if(err){
        console.log('Error in runnng the server',err);
    }
})
