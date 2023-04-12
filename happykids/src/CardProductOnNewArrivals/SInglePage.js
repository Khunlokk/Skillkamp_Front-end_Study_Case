import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";

function SinglePage() {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { sku } = useParams();

  useEffect(() => {
    fetch(`https://skillkamp-api.com/v1/api/products/details/${sku}`)
      .then((res) => res.json())
      .then((result) => {
        if (
          result &&
          result.detail &&
          result.detail.data &&
          result.detail.data.catalog &&
          result.detail.data.catalog.product
        ) {
          setProduct(result.detail.data.catalog.product);
        } else {
          setProduct(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProduct(null);
      });
  }, []);

  const handleColorSelection = (color, index) => {
    setSelectedColor({ ...color, index });
    setSelectedSize(null);
    setSelectedQuantity(1);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setSelectedQuantity(1);
  };

  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    // Logic to add the selected product to cart
    console.log("Product added to cart:", product);
  };

  return (
    <div className="space">
      <div className="zone">
        <div className="image_show">
          <div className="image_product">
            {product &&
              product.media &&
              product.media[selectedColor?.index || 0] && (
                <img
                  src={product.media[selectedColor?.index || 0]?.fullUrl}
                  alt={product.name}
                />
              )}
          </div>
        </div>
      </div>
      <div className="zone">
        {" "}
        {product ? (
          <div className="detail_product">
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Price: {product.formattedPrice}</p>
            <p>Discounted Price: {product.formattedDiscountedPrice}</p>
            <p>sku: {product.sku}</p>
            <p>
              Colors:
              {product.options[0].selections.map((selection, index) => (
                <div
                  key={selection.id}
                  onClick={() => handleColorSelection(selection, index)}
                  style={{
                    backgroundColor: selection.value,
                    marginRight: "5px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedColor && selectedColor.index === index && (
                    <span>&#10004;</span>
                  )}
                </div>
              ))}
            </p>
            <p>
              Sizes:
              <select
                value={selectedSize}
                onChange={(e) => handleSizeSelection(e.target.value)}
              >
                <option value="">Select size</option>
                {product.options[1].selections.map((selection) => (
                  <option key={selection.id} value={selection.value}>
                    {selection.value}
                  </option>
                ))}
              </select>
            </p>
            <p>
              Quantity:
              <input
                type="number"
                min="1"
                max={product.inventory.quantity}
                value={selectedQuantity}
                onChange={handleQuantityChange}
              />
            </p>

            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
