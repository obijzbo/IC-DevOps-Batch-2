const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/dogsdb', {
    // Removed deprecated options
}).then(() => {
    console.log('MongoDB connected successfully!');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define Owner and Dog Schemas and Models
const dogSchema = new mongoose.Schema({
  breed: String,
  expectedLifespan: Number,
  description: String
});

const ownerSchema = new mongoose.Schema({
  name: String,
  contact: String,
  address: String,
  dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }]
});

const Dog = mongoose.model('Dog', dogSchema);
const Owner = mongoose.model('Owner', ownerSchema);

// Hardcoded data (can be removed once data is stored in Mongodb)
let owners = [
  { id: 1, name: 'John Doe', contact: 'john@example.com', address: '123 Dog Street', dogs: [1, 2] },
  { id: 2, name: 'Sarah Smith', contact: 'sarah@example.com', address: '456 Dog Ave', dogs: [3, 4] },
  { id: 3, name: 'Michael Brown', contact: 'michael@example.com', address: '789 Dog Blvd', dogs: [5, 6] },
  { id: 4, name: 'Emma Johnson', contact: 'emma@example.com', address: '101 Dog Lane', dogs: [7] },
  { id: 5, name: 'David Wilson', contact: 'david@example.com', address: '202 Dog Court', dogs: [8, 9] },
  { id: 6, name: 'Reshmi Habib', contact: 'lisa@example.com', address: '303 Dog Road', dogs: [10, 6] }
];

let dogs = [
  { id: 1, breed: 'Golden Retriever', expectedLifespan: 12, description: 'Friendly and tolerant' },
  { id: 2, breed: 'Beagle', expectedLifespan: 13, description: 'Merry and curious' },
  { id: 3, breed: 'Labrador Retriever', expectedLifespan: 12, description: 'Outgoing and even-tempered' },
  { id: 4, breed: 'Poodle', expectedLifespan: 14, description: 'Active and intelligent' },
  { id: 5, breed: 'German Shepherd', expectedLifespan: 10, description: 'Confident and courageous' },
  { id: 6, breed: 'Boxer', expectedLifespan: 10, description: 'Bright and playful' },
  { id: 7, breed: 'Bulldog', expectedLifespan: 8, description: 'Calm and friendly' },
  { id: 8, breed: 'Rottweiler', expectedLifespan: 9, description: 'Loyal and confident' },
  { id: 9, breed: 'Dachshund', expectedLifespan: 13, description: 'Clever and lively' },
  { id: 10, breed: 'Yorkshire Terrier', expectedLifespan: 15, description: 'Feisty and affectionate' }
];

// API to get all owners with their dogs (from MongoDB)
app.get('/owners', async (req, res) => {
  try {
    const ownerList = await Owner.find().populate('dogs');
    res.json(ownerList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API to get owner by ID with their dogs (from MongoDB)
app.get('/owners/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id).populate('dogs');
    if (!owner) return res.status(404).json({ error: 'Owner not found' });
    res.json(owner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Hardcoded endpoints (optional, for testing without MongoDB)
app.get('/owners-static', (req, res) => {
  const ownerList = owners.map(owner => {
    const ownerDogs = owner.dogs.map(dogId => dogs.find(dog => dog.id === dogId));
    return { ...owner, dogs: ownerDogs };
  });
  res.json(ownerList);
});

app.get('/owners-static/:id', (req, res) => {
  const ownerId = parseInt(req.params.id);
  const owner = owners.find(o => o.id === ownerId);

  if (owner) {
    const ownerDogs = owner.dogs.map(dogId => dogs.find(dog => dog.id === dogId));
    res.json({ ...owner, dogs: ownerDogs });
  } else {
    res.status(404).json({ error: 'Owner not found' });
  }
});

// Add a new dog
app.post('/dogs', async (req, res) => {
  const { breed, expectedLifespan, description } = req.body;
  try {
    const newDog = new Dog({ breed, expectedLifespan, description });
    await newDog.save();
    res.status(201).json(newDog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new owner
app.post('/owners', async (req, res) => {
  const { name, contact, address, dogs } = req.body;  // 'dogs' should be an array of dog IDs
  try {
    const newOwner = new Owner({ name, contact, address, dogs });
    await newOwner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/dogs', async (req, res) => {
  const { breed, expectedLifespan, description } = req.body;
  try {
    const newDog = new Dog({ breed, expectedLifespan, description });
    await newDog.save();
    res.status(201).json(newDog);
  } catch (err) {
    console.error("Error adding dog:", err.message);  // Log the error
    res.status(500).json({ error: err.message });
  }
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Server is running Hot. reloading test!');

});

