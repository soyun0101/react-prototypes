import React from 'react';
import StudentTable from './table';

function App(){
    return(
        <>
            <div className="container">
                <h1>Student Grade Table</h1>
                <StudentTable data={students}/>
            </div>
        </>
    )
}

const students = [
    {
        student: 'Alice',
        course: 'Day Dreaming',
        grade: 88,
    },
    {
        student: 'Goofy',
        course: 'Goofing Around',
        grade: 90,
    },
    {
        student: 'Belle',
        course: 'Speed Reading',
        grade: 95,
    },
];

export default App;
