import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"
const Course = ({topic}) => {
    console.log(topic);
    const {name,total,logo,id}=topic;
    
    return (
        <div className='course-list'>
           <div className="img-div">
              <img src={logo} alt="" />
           </div>

            <div className='cart-bootm'>
               <h2>{name} <span className='quiz-quntity'>Quiz-{total}</span></h2>
              
               <button className='btn'>
                 <Link to={`/quiz/${id}` }>Start</Link>
               </button>
            </div>
        </div>
    );
};

export default Course;