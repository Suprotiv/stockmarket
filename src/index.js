import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Session1 from './Session1';
import Session2 from './Session2';
import Session3 from './Session3';
import Home from './Home';
import Dashboard from './Dashboard';

const router = createHashRouter([
  {
    path: "/",
    element: <><Home/></>
  },
  {
    path: "/dashboard",
    element: <><Dashboard/></>
  },
  {
    path: "/session1",
    element: <><Session1 /></>
  },
  {
    path: "/session2",
    element: <><Session2 /></>
  },
  {
    path: "/session3",
    element: <><Session3 /></>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
