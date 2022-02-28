import React, {useEffect, useState} from 'react';
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 
  const [data, setData] = useState("");
  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => setStudentData(data.students))
      .catch(error => alert('Something went wrong!'));
  }

  useEffect(() => {
    getStudents(URL);
  }, []); 

  const filter = (stud, dat) => {
    if (dat === '')
    {
      return (
        stud.map((nam) => {
          let fullName = nam.firstName + ' ' + nam.lastName;
          let total = 0;
          let arrNumbers = nam.grades;
          for (let i = 0; i < arrNumbers.length; i++){
            total += Math.floor(arrNumbers[i]);
          }
          let average = total/arrNumbers.length;
          
          return (
              <>
                <img src={nam.pic} />
                <div className="box">
                  <p style={{fontWeight: "bold"}} className="name">{fullName}</p>
                  <p>Email: {nam.email}</p>
                  <p>Company: {nam.company}</p>
                  <p>Skill: {nam.skill}</p>
                  <p>Average: {average}</p>
                </div>
              </>
          )
        }) // map method
      ); //Main return
    }// Main If
    
    else
    { 
      return (
        stud.map((nam) => {
          if (nam.firstName.toLowerCase().includes(data) || nam.lastName.toLowerCase().includes(data))
          {
            let fullName = nam.firstName + ' ' + nam.lastName;
            let total = 0;
            let arrNumbers = nam.grades;
            for (let i = 0; i < arrNumbers.length; i++){
              total += Math.floor(arrNumbers[i]);
            }
            let average = total/arrNumbers.length;
            
            return (
                <>
                  <img src={nam.pic} className="leftImag"/>
                  <div className="box">
                    <p style={{fontWeight: "bold"}} className="name">{fullName}</p>
                    <p>Email: {nam.email}</p>
                    <p>Company: {nam.company}</p>
                    <p>Skill: {nam.skill}</p>
                    <p>Average: {average}</p>
                  </div>
                </>
            )
          }// If condition
          
          else
            return;
        }) // map method
      ); //Main return
    } // Main else condition
  }
  
  return (
    <main>
    <div>
      <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder = {"Search by name"} 
      />
      <div>{filter(studentData, data)}</div>
    </div>
    </main>
  )
}

export default App;