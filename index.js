const express = require("express");
const connect = require("./config/db");
const Route = require("./route/Quiz_route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

app.use("/Quizess",Route);

app.listen(process.env.PORT, () => {
    connect();
    console.log(`port is running ${process.env.PORT}`);
  });

  