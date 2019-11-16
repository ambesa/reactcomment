const router = require("express").Router();
// REQURING EXPRESS .ROUTER
const bookController = require("../../controllers/bookController");
// REQURING CONTROLLERS FOLDES / BOOKCONTROLLER
// Matches with "/api/books"
// CRATING ROUTER TO GARB FINDALL
// THEN POST BOOKCONTROLER.CREATE 
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
//  ROUTER /:ID AND GET BOOKCONTROLLER FOLDER AND HIT
// FIND BY ID , .PUT  AND GET UPDATE FUN AND . DELETE AND REMOVE 
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);
    // ATLAST AS USUALL EXPORT THE ROUTER MODULE 

module.exports = router;
