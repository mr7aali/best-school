import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const data= useLoaderData();
    
    return (
        <div className='chart'>

            <LineChart
                width={900}
                height={400}
                data={data.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
               
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>


        </div>
    );
};

export default Statistics;