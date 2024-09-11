import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const options = {
  serverSelectionTimeoutMS: 30000, // Timeout for server selection
  socketTimeoutMS: 45000, // Timeout for queries
};

let isConnected = false; // Track the connection status

// Event listeners for the connection
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
  isConnected = false;
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected!');
  isConnected = true;
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  isConnected = false;
});

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    // Establish a new database connection
    await mongoose.connect(uri, options);
    isConnected = true;
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
