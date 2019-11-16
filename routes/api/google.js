const router = require("express").Router();
// REQUIRING EXPRESS ROUTER
const googleController = require("../../controllers/googleController");
 // REQURING CONTROLLERS FOLDE AND GOOGLECONROLLER FILE 
// Matches with "/api/google"
// CRETING ROUTE / 
// .GET AND HIT GOOGLECONTROLLER.FINDALL [FIND ALL IS A METHOD INSIDE THE FILE ]
router
  .route("/")
  .get(googleController.findAll);
  // EXPORT THE MOULE 

module.exports = router;
