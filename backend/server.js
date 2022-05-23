const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 2300;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postsRoutes"));
app.use("/api/event", require("./routes/eventRoutes"));

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on port ${port}`.yellow.bold)
);
