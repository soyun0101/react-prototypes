import React from 'react';
import ReactDOM from 'react-dom';


function LuckyNumber(){
    const randomNumber = Math.floor( Math.random() * (1000 - 1) + 1);//return random number between 1-1000//
    return randomNumber;
}


function Greeting(props){
    return(
        <>
            <div className="container">
                <h1>Greetings, {props.name} </h1>
                <h2 className="text-muted">Your lucky number is {props.luckyNumber}</h2>
            </div>
        </>
    )
}
// const user = <Greeting name="Stu" luckyNumber={LuckyNumber()}/>;

const user ={
    name:  "Stu",
    luckyNumber: LuckyNumber(),
}




ReactDOM.render(
    Greeting(user),
    // <h1 className="container text-center">React Prototypes!</h1>,
    document.getElementById('root')
);






