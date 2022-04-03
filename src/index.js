const express = require("express");

// const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const UserController= require("./controllers/user.controller");
const BatchController= require("./controllers/batch.controller");
const EvaluationController= require("./controllers/evaluation.controller");
const StudentController= require("./controllers/student.controller");
const Sub_Controller= require("./controllers/submission.controller");

app.use("/user",UserController);
app.use("/batch",BatchController);
app.use("/evaluation",EvaluationController);
app.use("/student",StudentController);
app.use("/submission",Sub_Controller);

module.exports = app;


