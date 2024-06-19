const express = require("express");

const client = require("../database/client");

const itemActions = require("./controllers/itemActions");
const statusActions = require("./controllers/statusActions");
const categorieActions = require("./controllers/categorieActions");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
router.post("/courses", itemActions.add);
router.get("/status", statusActions.browse);
router.get("/categorie", categorieActions.browse);

router.get("/courses", (req, res) => {
  client
    .query(
      `
    SELECT 
      c.id, c.name, c.quantity, 
      cat.name AS category_name, 
      s.name AS status_name
    FROM Courses AS c
    INNER JOIN Categories cat ON c.category_id = cat.id
    INNER JOIN Status s ON c.status_id = s.id
  `
    )
    .then((courses) => res.status(200).json(courses[0]));
});

router.get("/courses/:id", (req, res) => {
  client
    .query(
      `
    SELECT 
      c.id, c.name, c.quantity, 
      cat.name AS category_name, 
      s.name AS status_name
    FROM Courses AS c
    INNER JOIN Categories cat ON c.category_id = cat.id
    INNER JOIN Status s ON c.status_id = s.id 
    WHERE c.id = ?;
  `,
      [req.params.id]
    )
    .then((courses) => res.status(200).json(courses[0][0]));
});

/* ************************************************************************* */

module.exports = router;
