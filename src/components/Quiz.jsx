import { useState, useEffect } from 'react';
import { data } from '../data';
import Question from './Question';
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [answers, setAnswers] = useState(new Array(data.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = data[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];

  const enableNext = () => {
    setIsDisabled(false);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setIsDisabled(true);
  };

  const handleSubmit = () => {
    setIsDisabled(true);
    setIsSubmitted(true);
  };

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log(answers);
    }
  }, [isSubmitted]);

  const previousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setIsDisabled(false);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <Question
        key={currentQuestion.id}
        question={currentQuestion.question}
        options={currentQuestion.options}
        id={currentQuestion.id}
        enableNext={enableNext}
        answer={currentAnswer}
        onAnswerChange={handleAnswerChange}
      />
      {currentQuestionIndex !== 0 && (
        <button disabled={isSubmitted} onClick={previousQuestion}>
          Previous
        </button>
      )}
      {currentQuestionIndex === data.length - 1 ? (
        <button disabled={isDisabled} onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button disabled={isDisabled} onClick={nextQuestion}>
          Next
        </button>
      )}
    </div>
  );
};
export default Quiz;
