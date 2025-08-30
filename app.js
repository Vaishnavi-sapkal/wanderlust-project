if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dburl = process.env.ATLASDB_URL;
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");
const filterRouter = require("./routes/filter.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
//const cookieParser = require('cookie-parser');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./models/user.js");

main()
  .then(() => {
    console.log("connect to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dburl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

const store = MongoStore.create({
  mongoUrl: dburl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Error in MONGO SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 1000,
    maxage: 7 * 24 * 60 * 1000,
    httpOnly: true, //for cross skripting attacks we use httpOnly
  },
};
// app.get("/", (req, res) => {
//   res.send("hi , I am root");
// });

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
//note : we have to use flash before our paths like /listings and all
app.use(flash());
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

//search route
app.get("/listings/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.redirect("/listings");
  }

  const allListings = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  });

  res.render("listings/index", { allListings, searchQuery: query });
});

app.use("/listings", listingsRouter);

app.use("/listings/:id/reviews", reviewsRouter);

app.use("/", usersRouter);

app.use("/listings/filter", filterRouter);

// app.get("/testlisting", async (req,res) => {
//     let samplelisting = new Listing({
//         title : "my  new villa",
//         description :"by the beach",
//         image: "",
//         price : 1200,
//         location : "calangute, Goa",
//         country : "India",
//     });

//     await samplelisting.save();
//     console.log("sample was save");
//     res.send("successful testing");
// });

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.status(status).render("error.ejs", { status, message });
});

app.listen(8080, () => {
  console.log("server is listening to the port 8080");
});
