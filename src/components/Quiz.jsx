import { useState, useEffect } from 'react';
import { data } from '../data';
import Question from './Question';
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentQuestion = data[currentQuestionIndex];

  const enableNext = (e) => {
    setCurrentAnswer(e.currentTarget.firstChild.value);
    setIsDisabled(false);
  };

  const nextQuestion = () => {
    setAnswers((prevAnswers) => [...prevAnswers, currentAnswer]);
    setCurrentQuestionIndex((prev) => prev + 1);
    setIsDisabled(true);
  };

  const handleSubmit = () => {
    setAnswers((prevAnswers) => [...prevAnswers, currentAnswer]);
    setIsDisabled(true);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log(answers);
    }
  }, [isSubmitted]);

  const previousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setAnswers(
      answers.filter((answer, index) => index + 1 !== currentQuestionIndex)
    );
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
