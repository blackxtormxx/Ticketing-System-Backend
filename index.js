import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app/app.js"

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open', () => {
    console.log("Mongo DB connected");
});

app.listen(PORT, () => {
    console.log("Server is starting on port" + PORT);
});