import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Productmjs";

// add product : /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    const images = req.files;

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    await Product;
  } catch (error) {}
};

// get product : /api/product/ist
export const productList = async (req, res) => {};

// get single product : /api/product/id
export const productById = async (req, res) => {};

// change product inStock : /api/product/stock
export const changeStock = async (req, res) => {};
