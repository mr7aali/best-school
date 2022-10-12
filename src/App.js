
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';
import Quizs from './components/Quizs/Quizs';
import Statistics from './components/Statistics/Statistics';
import Main from './Layout/Main';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quizs></Quizs>
        },
       {
        path:'/blog',
        element:<Blog></Blog>
       },
       {
        path:'/statistics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Statistics></Statistics>
       }
        

      ]
    },
    {
      path: '*',
      element: <Notfound></Notfound>
    }

  ]);

  return (
    <div >

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
