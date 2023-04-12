import { Select } from "@mui/material";
import { style } from "@mui/system";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import "./Product.css";
import SinglePage from "./SInglePage";
import { Link } from "react-router-dom";

const API = "https://skillkamp-api.com/v1/api/products/details";

// Component for displaying product cards
const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.media[0].url}
        alt={product.name}
      />
      <h3 className="product-card__name">{product.name}</h3>
      <p>Price: {product.formattedPrice}</p>
      <div>
        <Link to={`${product.sku}`}>read more</Link>
      </div>
      <button
        className="product-card__button"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

// // Component for displaying cart
// const Cart = ({ cartItems }) => {
//   return (
//     <div className="cart">
//       <h3>Cart</h3>
//       {cartItems.map((item, index) => (
//         <div key={index}>
//           <p>{item.name}</p>
//           <p>Price: {item.price}</p>
//           <p>Color: {item.color}</p>
//           <p>Size: {item.size}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// Main component
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://skillkamp-api.com/v1/api/products/"
        );
        const data = await response.json();
        setProducts(
          data.detail.data.catalog.category.productsWithMetaData.list
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // const [productData, setProductData] = useState(null);
  // // Handle product click to display product details
  // const handleProductClick = (product) => {
  //   setProduct(product);
  // };
  const handleAddToCart = (products) => {
    // Add logic for adding product to cart
    console.log("Adding product to cart:", products);
  };

  // const [productdata, setProductdata] = useState(null);

  // useEffect(() => {
  //   // Fetch product data from API
  //   fetch("https://skillkamp-api.com/v1/api/products/details/00001")
  //     .then((response) => response.json())
  //     .then((data) => setProductdata(data.detail.data.catalog.product))
  //     .catch((error) => console.error(error));
  // }, []);

  const Select = styled.select``;
  const Option = styled.option``;

  return (
    <div>
      <h2 className="product-page">Shop Collection</h2>
      <div>
        <div>
          <h1>Filter by</h1>
          <Select>
            <Option selected>Newest</Option>
            <Option selected>Newest</Option>
            <Option selected>Newest</Option>
          </Select>
        </div>
        <div className="product-list product-page">
          <div>
            {products.map((products, index) => (
              <ProductCard
                key={index}
                product={products}
                handleAddToCart={handleAddToCart}
              />
            ))}
            <div>
              {/* Render formattedPrice and formattedDiscountedPrice conditionally */}
              {products.formattedPrice === products.formattedDiscountedPrice ? (
                <p style={{ fontSize: "16px", color: "#666" }}>
                  {products.formattedPrice}
                </p>
              ) : (
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      textDecoration: "line-through",
                    }}
                  >
                    {products.formattedPrice}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#666",
                    }}
                  >
                    {products.formattedDiscountedPrice}
                  </p>
                </div>
              )}
              {products.ribbon && (
                <span className="span">{products.ribbon}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <SInglePage productdata={productdata} /> */}
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
};

export default ProductPage;
