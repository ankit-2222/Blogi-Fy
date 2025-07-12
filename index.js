require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Blog = require("./models/blog");

const userRout = require("./routes/user");
const blogRout = require("./routes/blog");

const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

mongoose
  .connect(process.env.MONGO_URL)
  .then((e) => console.log("MongoDB connected Successfully..."));

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/user", userRout);
app.use("/blog", blogRout);

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT} !!!`));
