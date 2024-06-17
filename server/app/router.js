const express = require("express");

const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/courses", (req, res) => {
  client
    .query(
      `
    SELECT 
      c.id, c.name, c.quantity, c.unit, 
      cat.name AS category_name, 
      s.description AS status_description
    FROM Courses c
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
      c.id, c.name, c.quantity, c.unit, 
      cat.name AS category_name, 
      s.description AS status_description
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
