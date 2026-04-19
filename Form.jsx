import { useState } from "react";

function Form({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !score) return;

    onAddStudent(name, score);
    setName("");
    setScore("");
  };
  return (
    <div>
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Score:</label>
        <input
          type="number"
          placeholder="Enter score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;