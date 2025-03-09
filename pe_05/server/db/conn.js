import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://jonathankoerber:BVB9SKTH3B%25P3mGwyjwq@cluster0.xc9nb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let db;

async function connectDB() {
    try {
        const conn = await client.connect();
        console.log("Connected to MongoDB successfully!");
        db = conn.db("PE_05");
    } catch (e) {
        console.error("Database connection failed:", e);
    }
}

connectDB();

export default db;