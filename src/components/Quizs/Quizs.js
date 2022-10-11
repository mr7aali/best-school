import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizs = () => {
    const quizs = useLoaderData();
    //    console.log(quizs.data.questions)
    return (
        <div>
            <h1 className='quiz-header'>Quiz of {quizs.data.name}</h1>
            {
                quizs.data.questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default Quizs;