
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Quizs from './components/Quizs/Quizs';
import Main from './Layout/Main';




function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async ()=>{
           return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizId',
          loader:async({ params })=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element:<Quizs></Quizs>
       }
        
      ]
    },
    {
      path:'*',
      element: <h1>Page not found</h1>
    }
   
  ]);

  return (
    <div >

     <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
