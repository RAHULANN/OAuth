const express = require("express");
const app = express();
const session = require("express-session");
const connect = require("./config/mongoDb-config");
const logger = require("./config/logger");
require("dotenv").config();
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const port = process.env.PORT || 8000;

const flash = require("connect-flash");

const cors = require("cors");

app.use(expressLayout);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use(cors());
//creating session of user
app.use(
  session({
    name: "auth_app",
    secret: "we are testing here",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${process.env.MONGO_USER ?? ""}:${
        process.env.MONGO_PASSWORD ?? ""
      }@cluster0.hdjgh3x.mongodb.net/`,

      autoRemove: "interval",
      autoRemoveInterval: 10, // In minutes. Default
    }),
  })
);

app.use(flash());

connect()
  .then(() => {
    app.listen(port, function (error) {
      if (error) {
        logger.log(`Error running port ${error}`);
      } else {
        logger.log(`Server started on ${port}`);
      }
    });
  })
  .catch((error) => {
    logger.error(`Error connecting to MongoDB: ${error}`);
  });
