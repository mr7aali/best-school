import { useState } from 'react';
import Option from '../Option/Option';
import './Question.css'
const Question = ({ question }) => {
    // console.log(question.question)
    //console.log(question.correctAnswer)
    const [answerShower ,setanswerShower]=  useState(false);
 
  const ChgAnswerShower =(value)=>{
    console.log(value)
    setanswerShower(value)

}
if(answerShower){
    Element = <h1>Correct Answer is <span>{question.correctAnswer}</span></h1>
}

    return (
        <div className='single-question-div'>
            <div className='question-div'>
                <h3>{question.question}</h3>
            </div>
            <div className='options-div'>
                {
                    question.options.map(option => <Option

                        option={option}
                        correctAnswer={question.correctAnswer}
                        ChgAnswerShower={ChgAnswerShower}
                    ></Option>)
                }
            </div>


  {
    Element 
  }
        </div>
    );
};

export default Question;