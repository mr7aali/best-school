import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBlog from '../HomeBlog/HomeBlog';
import Course from '../Topics/Course';
import './Home.css'
const Home = () => {
  const Topics = useLoaderData();


  return (
    <div>

      <HomeBlog></HomeBlog>
      <h1 className='quiz-header'>Quiz Categories</h1>

      <div className="course-container">
        {
          Topics.data.map(topic => <Course
            key={topic.id}
            topic={topic}
          ></Course>)
        }
      </div>
    </div>
  );
};

export default Home;