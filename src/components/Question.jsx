const Question = ({ id, question, options, enableNext }) => {
  return (
    <div key={id}>
      <h2>{question}</h2>
      {options.map((option) => {
        return (
          <div key={option}>
            <span onClick={enableNext}>
              <input type='radio' name={question} id={option} value={option} />
              <label htmlFor={option}>{option}</label>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Question;
