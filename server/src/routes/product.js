// routes/product.route.js
import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();




router.post("https://mangi-server.vercel.app/search-by-barcode", productController.getProductByBarcode);
router.get("https://mangi-server.vercel.app/getNews/:keyword", productController.getNews);
router.get("https://mangi-server.vercel.app/getProductStoresNearby/:productName", productController.getProductStoresNearby
);


export default router;
