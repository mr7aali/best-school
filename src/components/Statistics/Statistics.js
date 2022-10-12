import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Total from '../TotalSta/Total';
import './Statistics.css'
const Statistics = () => {
   const Topic = useLoaderData();
   console.log(Topic.data)
    return (
        <div>
            {
                Topic.data.map(topic=> <Total
                name= {topic.name}
                total={topic.total}
                ></Total>)
            }
        </div>
    );
};

export default Statistics;