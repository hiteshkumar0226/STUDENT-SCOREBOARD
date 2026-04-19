function Content({ students, onDeleteStudent }) {
  return (
    <div id="content">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Result</th>
            
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const result = student.score >= 30 ? "Pass" : "Fail";
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.score}</td>
                <td>{result}</td>
                <td>
                  <button onClick={() => onDeleteStudent(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Content;