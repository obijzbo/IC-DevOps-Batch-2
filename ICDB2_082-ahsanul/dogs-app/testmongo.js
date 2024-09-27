const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dogsdb')
.then(() => {
  console.log('MongoDB connected successfully');
  mongoose.connection.close();
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});