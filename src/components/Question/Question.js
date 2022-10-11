import Option from '../Option/Option';
import './Question.css'
const Question = ({ question }) => {
    // console.log(question.question)
    //console.log(question.correctAnswer)
 
 

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
                        
                    
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;