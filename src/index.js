import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Post from "./Components/Post"
import SignUp from "./Components/SignUp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/Post" element={<Post/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
