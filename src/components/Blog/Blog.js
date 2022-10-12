import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='Blog-container'>
            <div className='Question'>
                <h1>What is purpose of react router?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL .ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.</p>
            </div>
            <div className='Question'>
                <h1>How does context api work?</h1>
                <p>Redux is great and came perfectly to answer the need for state management. Actually, it answered this need so well that it came to be known that you can't be a "true" React developer if you don't know your way around Redux. <br />
                Redux is just a concept. If you are comfortable with using reducers and actions and don't find hindering than you may also create reducers and actions that wrap Context API as the store as Redux's author Dan Abramov explained in his medium article about whether Redux is always required</p>
            </div>
            <div className='Question'>
                <h1>What is usestate in react?</h1>
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blog;