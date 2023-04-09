import React, { useState, useEffect } from "react";

const SliderCardProduct = () => {
  const [products, setProducts] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Added total price state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://skillkamp-api.com/v1/api/products/new_arrivals"
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = x - startX;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    console.log(`Product ID ${productId} added to cart!`);

    // Add your logic for adding product to cart here
    setCartItems([...cartItems, productToAdd]);
  };

  const formattedValue = (value) => {
    return value.toFixed(2);
  };

  useEffect(() => {
    const handleCalculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        const price = item.discountedPrice || item.price;
        total += price;
      });
      setTotalPrice(total);
    };
    handleCalculateTotalPrice();
  }, [cartItems]);

  return (
    <div>
      <h1>New Arrivals</h1>
      <div
        style={{ display: "flex", overflowX: "scroll" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              flex: "0 0 auto",
              marginRight: "16px",
              minWidth: "250px",
              width: "250px",
              height: "400px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "16px",
            }}
          >
            <img
              src={product.media[0].url}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h2
              style={{ marginTop: "8px", fontSize: "18px", fontWeight: "bold" }}
            >
              {product.name}
            </h2>
            <div>
              {/* Render formattedPrice and formattedDiscountedPrice conditionally */}
              {product.formattedPrice === product.formattedDiscountedPrice ? (
                <p style={{ fontSize: "16px", color: "#666" }}>
                  {product.formattedPrice}
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
                    {product.formattedPrice}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#666",
                    }}
                  >
                    {product.formattedDiscountedPrice}
                  </p>
                </div>
              )}
            </div>
            {product.ribbon && (
              <span
                style={{ fontSize: "14px", color: "red", fontWeight: "bold" }}
              >
                {product.ribbon}
              </span>
            )}
            <button
              onClick={() => handleAddToCart(product.id)}
              style={{ marginTop: "8px" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.formattedDiscountedPrice}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: "16px", color: "bl" }}>
          Total Price: ${formattedValue(totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default SliderCardProduct;
