import React, { useState } from 'react';
import "./Option.css"
const Option = ({ option,correctAnswer}) => {
    const [answer,setAnswer]= useState(false);
    const answerTester =(clickED)=>{
        setAnswer(correctAnswer===clickED);
    }


    return (
        <div onClick={()=>answerTester(option)} className={answer? `bg-blue` : 'bg-red'}>
            
            <p>{option}</p>
        </div>
    );
};

export default Option;