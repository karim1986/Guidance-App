const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const message = require("./routes/messagesRoute");
const conversation = require("./routes/conversationRoute");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("api/conversation", conversation);
app.use("api/message", message);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
