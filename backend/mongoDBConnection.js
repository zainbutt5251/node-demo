const { MongoClient } = require('mongodb');

// MongoDB connection URI
const password = encodeURIComponent('Butt@@11');
const uri = `mongodb+srv://zain:${password}@crud.jyqcfi9.mongodb.net/?retryWrites=true&w=majority&appName=crud`;

// Function to establish the MongoDB connection
async function connectToMongoDB() {
  // Create a new MongoClient instance
  const client = new MongoClient(uri, {
    useNewUrlParser: true,     // Parse the connection string using the new URL parser
    useUnifiedTopology: true,  // Use the new Server Discovery and Monitoring engine
  });

  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected to MongoDB!");

    // Now you can perform operations on the MongoDB database
    // For example:
    // const database = client.db("your_database_name");
    // const collection = database.collection("your_collection_name");
    // Perform operations using the collection

    return client; // Return the MongoClient instance

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error
  }
}

// Export the function to be used elsewhere
module.exports = connectToMongoDB;
