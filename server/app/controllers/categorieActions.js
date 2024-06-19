// Import access to database tables
const client = require("../../database/client");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const categories = await client.query("SELECT * FROM Categories");

    // Respond with the items in JSON format
    res.status(200).json(categories[0]);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     Fetch a specific item from the database based on the provided ID
//     const item = await client.query("SELECT * FROM items where id = ? ", [
//       req.params.id,
//     ]);

//      If the item is not found, respond with HTTP 404 (Not Found)
//     Otherwise, respond with the item in JSON format
//     if (item == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(item);
//     }
//   } catch (err) {
//      Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//    Extract the item data from the request body
//   const item = req.body;
//   try {
//      Insert the item into the database
//     const insertId = await client.query(
//       "INSERT INTO Courses (name, category_id, quantity, status_id) VALUES (?, ?, ?, ?)",
//       [item.name, item.category_id, item.quantity, item.status_id]
//     );

//      Respond with HTTP 201 (Created) and the ID of the newly inserted item
//     res.status(201).json({ id: insertId[0].insertId, ...req.body });
//   } catch (err) {
//      Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  // add,
  // destroy,
};
