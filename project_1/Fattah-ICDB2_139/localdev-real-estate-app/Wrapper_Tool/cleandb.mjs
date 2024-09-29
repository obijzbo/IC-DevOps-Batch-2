import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// Connection URL
const url = `mongodb://admin:123123@localhost:27017/real_estate_db?authSource=admin`;
console.log(url);
const client = new MongoClient(url);

// Database Name
const dbName = 'real_estate_db';

async function main() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Clear Users
    const usersCollection = db.collection('User');
    const usersDeleted = await usersCollection.deleteMany({});
    console.log(`Deleted ${usersDeleted.deletedCount} user(s).`);

    // Clear Posts
    const postsCollection = db.collection('Post');
    const postsDeleted = await postsCollection.deleteMany({});
    console.log(`Deleted ${postsDeleted.deletedCount} post(s).`);

    // Clear PostDetails
    const postDetailsCollection = db.collection('PostDetail');
    const postDetailsDeleted = await postDetailsCollection.deleteMany({});
    console.log(`Deleted ${postDetailsDeleted.deletedCount} post detail(s).`);

    // Clear SavedPosts
    const savedPostsCollection = db.collection('SavedPost');
    const savedPostsDeleted = await savedPostsCollection.deleteMany({});
    console.log(`Deleted ${savedPostsDeleted.deletedCount} saved post(s).`);

    // Clear Chats
    const chatsCollection = db.collection('Chat');
    const chatsDeleted = await chatsCollection.deleteMany({});
    console.log(`Deleted ${chatsDeleted.deletedCount} chat(s).`);

    // Clear Messages
    const messagesCollection = db.collection('Message');
    const messagesDeleted = await messagesCollection.deleteMany({});
    console.log(`Deleted ${messagesDeleted.deletedCount} message(s).`);

    console.log('Database cleanup has been completed.');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();