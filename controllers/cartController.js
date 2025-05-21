const Product = require("../models/Product");
const Cart = require("../models/Cart");

exports.addProductToCart = async (productData) => {
  if (!productData || !productData.name) {
    throw new Error("Product name is required");
  }

  const product = await Product.findByName(productData.name);
  if (!product) {
    throw new Error(`Product '${productData.name}' not found`);
  }

  // Upewniamy się, że produkt ma wszystkie wymagane pola
  if (!product.name || !product.description || !product.price) {
    throw new Error("Product data is incomplete");
  }

  await Cart.add(product);
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};
