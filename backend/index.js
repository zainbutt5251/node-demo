// In your index.js file

const connectToMongoDB = require('./mongoDBConnection');

async function main() {
  let client;
  try {
    // Connect to MongoDB
    client = await connectToMongoDB();

    // Select the database
    const database = client.db("crud");

    // Select the users collection
    const usersCollection = database.collection("users");

    // CRUD Operations
    // Create a new user

    
    // const newUser = { name: "John Doe", email: "john@example.com" };
    // const insertResult = await usersCollection.insertOne(newUser);
    // console.log("New user inserted:", insertResult.ops[0]);

    // Read user(s)
    const user = await usersCollection.findOne({ email: "john@example.com" });
    console.log("Found user:", user);

    // // Update user
    // const updateResult = await usersCollection.updateOne(
    //   { email: "john@example.com" },
    //   { $set: { age: 30 } }
    // );
    // console.log("User updated:", updateResult.modifiedCount);

    // // Delete user
    // const deleteResult = await usersCollection.deleteOne({ email: "john@example.com" });
    // console.log("User deleted:", deleteResult.deletedCount);
    
  } catch (error) {
    console.error("Error in main:", error);
  } finally {
    // Close the MongoDB connection
    if (client) {
      await client.close();
      console.log("MongoDB connection closed.");
    }
  }
}

main();
