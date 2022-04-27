import React, {useState} from 'react';

function PlusButton({student}) 
{
    const [buttonSymbol, setbuttonSymbolt] = useState("+");
    const [gradesArr, setGrades] = useState([]);

    const handelButton = (e) => {
        e.preventDefault();
        
        if (buttonSymbol === "+")
        {
            setGrades(student.grades);
            setbuttonSymbolt("-");   
        }
        else
        {
            setGrades([]);
            setbuttonSymbolt("+");
        }
     };

    return (
        <div id='more'>
            <div>
                <button onClick={(e) => handelButton(e)} id= "buttonSym">{buttonSymbol}</button>
            </div>
            <ul id='grades'>
                {gradesArr.map((g, index) => <li>test {index+1} &nbsp;&nbsp;&nbsp;&nbsp; {g}%</li>)}
            </ul>
        </div>
    )
}

export default PlusButton;