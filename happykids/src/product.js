import React, { useEffect, useState } from "react";
import Axios from "axios";

function Product() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    setName(
      res.data.detail.data.catalog.category.productsWithMetaData.list[1].sku
    );
  });

  const [name, setName] = useState("");

  //   useEffect(() => {
  //     `${API}${product.sku}`;
  //   }, []);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Product;
