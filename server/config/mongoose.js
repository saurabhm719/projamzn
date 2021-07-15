const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodb_user:deathrunner@cluster0.dnerk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,  useUnifiedTopology: true });

const MONGOURI = "mongodb+srv://mongodb_user:deathrunner@cluster0.dnerk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = mongoose.connection;

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;