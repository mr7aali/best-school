import React, { useState } from 'react';
import "./Option.css"
const Option = ({ option,correctAnswer}) => {

  
    // const [answer,setAnswer]= useState();
    let name;
    
    const answerTester =(clickED)=>{
       
        // setAnswer(correctAnswer===clickED);
           // console.log(correctAnswer===clickED);
            if(correctAnswer===clickED){
                name='bg-blue';
            }
            else{
                name='bg-red'
            }
    }
    


    return (
        <div onClick={()=>answerTester(option)} className={'bg-common'}>
            
            <p>{option}</p>
        </div>
    );
};

export default Option;