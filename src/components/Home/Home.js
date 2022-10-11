import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBlog from '../HomeBlog/HomeBlog';
import './Home.css'
const Home = () => {
    const Topics = useLoaderData();
    console.log(Topics);
   const {name,id}=Topics;
   console.log(name,id);
    return (
       <div>
         <HomeBlog></HomeBlog>
         <h1>Topics list {Topics.length}</h1>

       </div>
    );
};

export default Home;