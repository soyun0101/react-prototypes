import React from 'react';

function StudentTable(props){
    const studentsArray = props.data;

    const tableRows = studentsArray.map(
        (item, index)=> {
            
            return (
                
            
                    <tr key={index}>
                        <td>{item.student}</td>
                        <td>{item.course}</td>
                        <td>{item.grade}</td>
                    </tr>
            
            )
        }
    );

    return(
        <>
        <table className="table">
            <thead className="thead-inverse">
            <tr>
                 <th >Name</th>
            
                 <th >Course</th>
            
                <th >Grade</th>
            </tr>
            </thead>
            <tbody>

                {tableRows}
            </tbody>
            
        </table>
        </>

    )
}

export default StudentTable;