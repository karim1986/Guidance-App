const express = require("express");
const router = express.Router();
const { addEvent, getAllEvent } = require("../controller/eventController");
router.get("/blogs", getAllEvent);
router.post("/add", addEvent);
/*router.put("/update/:id", updateEvent);
router.get("/:id", getById);
router.delete("/delete/:id", deleteEvent);
router.get("/user/:id", getByUserId);*/
module.exports = router;
