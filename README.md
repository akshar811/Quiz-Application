# Quiz-Application
This project is a Node.js + Express backend API for managing quizzes and storing user responses.
It allows users to fetch quizzes, submit their answers, and calculates their scores based on correct answers.
The data is stored in MongoDB, and Mongoose is used to interact with the database.

Features :-
Get All Quizzes: Fetch all available quizzes.
Get Quiz by ID: Fetch a specific quiz and its associated questions.
Submit Quiz: Submit answers for a specific quiz, and the backend calculates the score based on the correct answers.
Error Handling: Handles invalid quiz submissions, missing or malformed answers, and non-existent quizzes.

Installation :-
npm i mongoose express dotenv gitigonre

API Endpoints :-
create a quiz :- create a post route ---  http://localhost:8080/Quizess/create

Get All Quizzes :-  Find all quiz ---  http://localhost:8080/Quizess/AllQuiz

Get Quiz by ID  :-  
Fetches a specific quiz and its question --  http://localhost:8080/Quizess/66f6d51f5ed598d76f9f2904

Submit Quiz Answers :- 
Submits user answers and returns the score. -- http://localhost:8080/Quizess/66f6d51f5ed598d76f9f2904/submit
