import React, { useState } from 'react';
import { Progress, Radio, Button, message } from 'antd';
import './questionpage.css';

const questions = [
  {
    id: 1,
    prompt: "If \( x + 3 = 7 \), what is the value of \( x \)?",
    options: ["4", "10", "-4", "3"],
    answer: "4"
  },
  {
    id: 2,
    prompt: "What is the largest planet in our Solar System?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter"
  },
  {
    id: 3,
    prompt: "Which element is said to keep bones strong?",
    options: ["Calcium", "Iron", "Oxygen", "Hydrogen"],
    answer: "Calcium"
  },
  {
    id: 4,
    prompt: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "H2O2", "C2H5OH"],
    answer: "H2O"
  },
  {
    id: 5,
    prompt: "What is the square root of 64?",
    options: ["6", "8", "10", "12"],
    answer: "8"
  }
  
];
const QuestionPage = () => {
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const question = questions[current];
  const totalQuestions = questions.length;

  // Calculate progress based on submitted answers
  const progressPercent = (Object.keys(submittedAnswers).length / totalQuestions) * 100;

  const handleSubmitAnswer = () => {
    const newSubmittedAnswers = {
      ...submittedAnswers,
      [question.id]: selectedAnswer
    };
    setSubmittedAnswers(newSubmittedAnswers);

    console.log(`Submitted answer for question ${question.id}:`, selectedAnswer);
    message.success('Answer submitted!',.75);

    // Go to next question if there is one
    if (current < totalQuestions - 1) {
      setCurrent(current + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      // Handle the end of the quiz if there are no more questions
      message.info('End of the quiz!',1.5);
    }
  };

  return (
    <div>
      <Progress percent={Math.round(progressPercent)} showInfo={false} />
      <div className="question-container">
        <div className="question-title">{question.prompt}</div>
        <Radio.Group onChange={(e) => setSelectedAnswer(e.target.value)} value={selectedAnswer}>
          {question.options.map((option, index) => (
            <Radio key={index} value={option}>{option}</Radio>
          ))}
        </Radio.Group>
        <Button
          type="primary"
          onClick={handleSubmitAnswer}
          disabled={!selectedAnswer} // Disable if no option is selected
        >
          Submit Question
        </Button>
      </div>
    </div>
  );
};

export default QuestionPage;
