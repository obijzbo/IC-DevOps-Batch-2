import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
dotenv.config();

console.log(process.cwd())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)

// Connection URL
const url = `mongodb://admin:123123@localhost:27017/real_estate_db?authSource=admin`;
console.log(url)
const client = new MongoClient(url);

// Database Name
const dbName = 'real_estate_db';

async function main() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Seed Users
    const usersCollection = db.collection('User');
    const user1 = await usersCollection.insertOne({
      email: 'user1@example.com',
      username: 'user1',
      password: 'ckjsdh9e2o3i4j', // In a real app, passwords should be hashed
      avatar: 'https://example.com/avatar1.jpg',
      createdAt: new Date(),
    });

    const user2 = await usersCollection.insertOne({
      email: 'user2@example.com',
      username: 'user2',
      password: 'xkjdh38388329s',
      avatar: 'https://example.com/avatar2.jpg',
      createdAt: new Date(),
    });

    // Seed Posts
    const postsCollection = db.collection('Post');
    const post1 = await postsCollection.insertOne({
      title: 'Beautiful 0 in Downtown',
      price: 1500,
      images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      address: '123 Main St',
      city: 'Metropolis',
      bedroom: 2,
      bathroom: 1,
      latitude: '40.712776',
      longitude: '-74.005974',
      type: 'rent',
      property: 'apartment',
      userId: user1.insertedId,
      createdAt: new Date(),
    });

    // Seed PostDetails
    const postDetailsCollection = db.collection('PostDetail');
    await postDetailsCollection.insertOne({
      desc: 'Spacious apartment with modern amenities.',
      utilities: 'Water, Electricity',
      pet: 'Allowed',
      income: 'Required',
      size: 800,
      school: 5,
      bus: 3,
      restaurant: 10,
      postId: post1.insertedId,
    });

    // Seed SavedPosts
    const savedPostsCollection = db.collection('SavedPost');
    await savedPostsCollection.insertOne({
      userId: user2.insertedId,
      postId: post1.insertedId,
      createdAt: new Date(),
    });

    // Seed Chats
    const chatsCollection = db.collection('Chat');
    const chat = await chatsCollection.insertOne({
      users: [user1.insertedId, user2.insertedId],
      seenBy: [user1.insertedId, user2.insertedId],
      lastMessage: 'Hello!',
      createdAt: new Date(),
    });

    // Seed Messages
    const messagesCollection = db.collection('Message');
    await messagesCollection.insertMany([
      {
        text: 'Hi there!',
        userId: user1.insertedId,
        chatId: chat.insertedId,
        createdAt: new Date(),
      },
      {
        text: 'Hello!',
        userId: user2.insertedId,
        chatId: chat.insertedId,
        createdAt: new Date(),
      },
    ]);

    console.log('Seed data has been inserted.');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
