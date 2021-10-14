const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const mainRoutes = require("./routes/main") 
app.set('view engine','ejs');
app.use(express.static('public'))


app.use(express.urlencoded({extended:true}))

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(mainRoutes)
app.use(authRoute);
app.use(userRoute);
app.use(postRoute);




app.listen(8800, () => {
  console.log("Backend server is running!");
});
