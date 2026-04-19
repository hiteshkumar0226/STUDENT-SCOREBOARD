import { useState, useEffect } from "react";
import Form from "./Component/Form.jsx";
import Content from "./Component/Content.jsx";
import "./App.css";
function App() {

  const [studentArr, setStudentArr] = useState(() => {
    return JSON.parse(localStorage.getItem("studentArr")) || [];
  });

  useEffect(() => {
    localStorage.setItem("studentArr", JSON.stringify(studentArr));
  }, [studentArr]);
  const addStudent = (name, score) => {
    const newStudent = { name, score: Number(score) };
    setStudentArr([...studentArr, newStudent]);
  };
  const deleteStudent = (index) => {
    const updatedStudents = studentArr.filter((_, i) => i !== index);
    setStudentArr(updatedStudents);
  };

  return (
  <div className="app-container">
    
    <div className="header">
      <h1>STUDENT SCOREBOARD</h1>
    </div>

    <div className="main-layout">
      
      <div className="left-panel">
        <Form onAddStudent={addStudent} />
      </div>

      <div className="right-panel">
        <Content students={studentArr} onDeleteStudent={deleteStudent} />
      </div>

    </div>

  </div>
);
}

export default App;