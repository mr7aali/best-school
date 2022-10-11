import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizs = () => {
    const quizs = useLoaderData();
    console.log(quizs.data.questions);
    return (
        <div>
          {
             quizs.data.questions.map(question=> <p>ali</p>)
          }
        </div>
    );
};

export default Quizs;