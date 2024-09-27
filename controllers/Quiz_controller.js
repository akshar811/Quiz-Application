const Quiz = require("../models/quiz_models");

const createQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.create(req.body);
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Submit quiz and calculate score

const submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const { answers } = req.body;
    if (!answers || answers.length !== quiz.questions.length) {
      return res.status(400).json({ error: "Invalid answers submission" });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
      }
    });

    res.json({ score, TotalAnswers: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQuiz, getAllQuizzes, getQuizById, submitQuiz };
