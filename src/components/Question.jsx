const Question = ({
  id,
  question,
  options,
  enableNext,
  answer,
  onAnswerChange,
}) => {
  return (
    <div key={id}>
      <h2>{question}</h2>
      {options.map((option) => {
        return (
          <div key={option}>
            <input
              type='radio'
              name={question}
              id={option}
              value={option}
              checked={answer === option}
              onChange={(e) => onAnswerChange(e.currentTarget.value)}
              onClick={enableNext}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};
export default Question;
