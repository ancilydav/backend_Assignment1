import express from "express";
import dotenv from "dotenv";
import inventoryRoute from "./routes/inventoryRoute.js";
import errorHandlers from "./middleware/errorHandlers.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/items",inventoryRoute);
app.use(errorHandlers);

const PORT = process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
});