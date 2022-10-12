import { useState } from 'react';
import Option from '../Option/Option';
import './Question.css'
const Question = ({ question }) => {
    // console.log(question.question)
    //console.log(question.correctAnswer)
    const [answerShower, setanswerShower] = useState(false);
    const [preShowerValue, SetpreShowerValue] = useState(false);
    const ChgAnswerShower = (value) => {
       
        setanswerShower(value)
    }
    if (answerShower || preShowerValue ) {
        Element = <h1 className='correctanser-header'>Correct Answer is <span>{question.correctAnswer}</span></h1>
    }
    const preShowerFun=(value)=>{
      console.log(value)
       SetpreShowerValue(value);
      // console.log(question.correctAnswer)
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

            <div className='pre-shower-icon' onClick={()=>preShowerFun(true)}>
                <h2>Show</h2>
            </div>

            {
                Element
            }
        </div>
    );
};

export default Question;