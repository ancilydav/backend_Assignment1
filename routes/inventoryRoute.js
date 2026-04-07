import express from "express";
import validateItem from "../middleware/validation.js";
import { getItems,getSingleitem,addItem,updateItem,deleteItem } from "../controllers/inventoryControllers.js";

const router = express.Router();
router.get("/",getItems);
router.get("/:id",getSingleitem);
router.post("/",validateItem,addItem);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem);

export default router;