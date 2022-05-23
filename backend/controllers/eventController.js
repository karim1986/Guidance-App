const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

//@desc     Get All Events
//@route    Post /api/events
//access    Public
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  res.status(200).json({ success: true, count: events.length, data: events });
});

//@desc     Get All events
//@route    Post /api/events
//access    Public
const createEvent = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const { date, time, address, description, profilePicture } = req.body;
  const event = await Event.create({
    date,
    time,
    address,
    description,
    profilePicture,
  });

  await event.save();

  return res.status(200).json({ success: true, data: event });
});

const interesstedEvent = async (req, res) => {
  const { eventId, user } = req.body;
  let event;
  try {
    event = await Event.findByIdAndUpdate(
      eventId,
      {
        $push: { interested: user },
      },
      { new: true }
    ).populate({ path: "user", select: "username" });
  } catch (error) {
    console.log(error);
  }
  if (!event) {
    return res.status(404).json({ message: "unable to update" });
  }
  return res.status(200).json({ success: true, data: event });
};

module.exports = { getEvents, createEvent, interesstedEvent };
