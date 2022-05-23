const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  interesstedEvent,
} = require("../controllers/eventController");
router.get("/", getEvents);
router.post("/", createEvent);
router.put("/", interesstedEvent);
/*router.put("/update/:id", updateEvent);
router.get("/:id", getById);
router.delete("/delete/:id", deleteEvent);
router.get("/user/:id", getByUserId);*/
module.exports = router;
