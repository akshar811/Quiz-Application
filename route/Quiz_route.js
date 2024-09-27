const { Router } = require("express");
const { createQuiz, getAllQuizzes, getQuizById, submitQuiz } = require("../controllers/Quiz_controller");

const Route = Router();

Route.post("/create",createQuiz);

Route.get("/AllQuiz",getAllQuizzes);

Route.get("/:id",getQuizById);

Route.post("/:id/submit",submitQuiz);

module.exports = Route;
