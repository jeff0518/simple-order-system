import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://cycivs07:1yNMWJ5m8loCaC28@cluster0.5lbqxvp.mongodb.net/auth-account?retryWrites=true&w=majority"
  );
  return client;
}
