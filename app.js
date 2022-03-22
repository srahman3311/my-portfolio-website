const express = require("express");
const path = require("path");

const app = express();

// Serving static assets
app.use(express.static(path.join(__dirname, "build")));

// For client side routing using react-router-dom 
app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});



const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("server running on port 3001"));