const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const colors = require("colors");
const cors = require("cors");
const db = require("./config/db");
const userRouter = require("./router/useRouter");
const eventRouter = require("./router/blogRoutes");
const postRouter = require("./router/postRouter");
const port = process.env.PORT || 8000;
db();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());
app.use(cookieParser());

app.use("/api", userRouter);
app.use("/blog", eventRouter);
app.use("/post", postRouter);
app.listen(port, () => {
  console.log(`server run in port ${port}`.yellow.bold);
});
