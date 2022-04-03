const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://AnwardeenM:anwar1234@cluster0.mnqdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  };

  module.exports = connect;
