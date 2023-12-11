import React, { useState } from 'react';
import { Card, Input, Button, Progress } from 'antd';

const TaskPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
      { id: 1, prompt: "What is 5 + 5?" },
      { id: 2, prompt: "What is the capital of France?" },
      // ... more questions
  ];

  const handleAnswerChange = (e) => {
      const { value } = e.target;
      setAnswers({
          ...answers,
          [questions[currentQuestionIndex].id]: value
      });
  };

  const handleNextQuestion = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const progressPercent = (currentQuestionIndex / questions.length) * 100;

  return (
      <div className="task-page">
          <Progress percent={Math.round(progressPercent)} />
          <Card className="question-card" bordered={false}>
              <div className="question-prompt">{questions[currentQuestionIndex].prompt}</div>
              <Input
                  placeholder="Type your answer here"
                  value={answers[questions[currentQuestionIndex].id] || ""}
                  onChange={handleAnswerChange}
              />
              <Button 
                  type="primary" 
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex >= questions.length - 1}
              >
                  Next Question
              </Button>
          </Card>
      </div>
  );
};

export default TaskPage;
