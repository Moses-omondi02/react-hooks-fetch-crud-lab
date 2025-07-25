import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => onDeleteQuestion(id);

  const handleAnswerChange = (e) => {
    const newCorrectIndex = parseInt(e.target.value, 10); // Ensure base 10 parsing
    onUpdateQuestion(id, newCorrectIndex);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
          value={correctIndex}
          onChange={handleAnswerChange}
          data-testid="correct-answer-dropdown" // Added for easier testing
        >
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
