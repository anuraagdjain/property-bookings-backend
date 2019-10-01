const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    limit: "5mb"
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;