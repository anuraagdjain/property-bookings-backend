const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const responseMW = require("./middlewares/response.middleware");

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    limit: "5mb"
  })
);

// middlewares
app.use(responseMW);
require("./config/passport.config");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const appRouter = require("./routes");

app.use("/v1/auth", appRouter.v1.authRoute);
app.use("/v1/properties", appRouter.v1.propertyRoute);
app.use("/v1/bookings", appRouter.v1.bookingRoute);

module.exports = app;
