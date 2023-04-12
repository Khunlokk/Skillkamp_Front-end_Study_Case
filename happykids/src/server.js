const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define API route
app.get("/", async (req, res) => {
  try {
    // Make HTTP GET request to remote URL
    const response = await axios.get(
      "https://skillkamp-api.com/v1/api/products"
    );

    // Extract the data from the response
    const data = response.data;

    // Send the data as the API response
    res.send(data);
  } catch (error) {
    // Handle error if any
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the API server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
