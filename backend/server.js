const express = require("express");
const incidentRoutes = require("./src/routes/incidentRoutes");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Security System API is running",
  });
});

app.use("/api/incidents", incidentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
