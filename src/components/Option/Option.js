import React, { useState } from 'react';
import "./Option.css"
const Option = ({ option,correctAnswer,ChgAnswerShower}) => {

     const [answerDivColor,setAnswerDivColor]= useState('bg-common');
    const answerTester =(clickED)=>{    
           if(correctAnswer===clickED){
            setAnswerDivColor('bg-blue')
           }
           else{
            setAnswerDivColor('bg-red');
            ChgAnswerShower(true);
           }
    }

    return (
        <div onClick={()=>answerTester(option)} className={answerDivColor} >
            
            <p>{option}</p>
        </div>
    );
};

export default Option;