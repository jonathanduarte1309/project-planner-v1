"use client";

import { useState } from "react";
import Feedback from "@/components/Feedback";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    question: "What is the output of `print(2 + 2)` in Python?",
    options: ["3", "4", "5", "Error"],
    correctAnswer: "4",
  },
  {
    question: "Which of the following is NOT a valid variable name in Python?",
    options: ["my_var", "my-var", "_my_var", "MyVar"],
    correctAnswer: "my-var",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Score: {score} out of {questions.length}</h2>
          <Feedback score={score} totalQuestions={questions.length} />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div className="flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`border p-2 mb-2 text-left ${selectedAnswer === option ? "bg-blue-200" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
