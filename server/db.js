const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost/Pidgeon')
    .then(()=>{console.log('Connected to MongoDB')})
    .catch(err => {console.log('Error connecting to MongoDB:', err.message)});
};

connect();

const testSchema = new mongoose.Schema({
  name: String,
  url: String,
  isPideon: Boolean
});

const Test = mongoose.model('Test', testSchema);

module.exports = {
  connect,
  Test
};