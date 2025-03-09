import express from 'express';
import cors from "cors";
import recipeRouter from "./routes/recipes.js";
import "./loadEnv.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/recipe", recipeRouter);


// starting app
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Succeffully Running, and App is listening on port " + PORT)
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
