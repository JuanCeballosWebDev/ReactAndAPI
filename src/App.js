import React, {useEffect, useState} from 'react';
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 
  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => setStudentData(data.students))
      .catch(error => alert('Something went wrong!'));
  }

  useEffect(() => {
    getStudents(URL);
  }, []); 

  
  return (
    <main>
    <div>
     {
       studentData && 
        studentData.map((student) => {
          
          let fullName = student.firstName + ' ' + student.lastName;
          let total = 0;
          let arrNumbers = student.grades;
          for (let i = 0; i < arrNumbers.length; i++){
            total += Math.floor(arrNumbers[i]);
          }
          let average = total/arrNumbers.length;
          
          return (
              <>
                <img src={student.pic} />
                <p style={{fontWeight: "bold"}}>{fullName}</p>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average}</p>
              </>
          )

        }) // From studentData.map
      }
    </div>
    </main>
  )
}

export default App;