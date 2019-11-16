const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// REQUIRING PATHS AND ROUTES 

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
  //EXPORT THE MODULE ROUTER 

module.exports = router;
