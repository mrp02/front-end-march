import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
// import Props from "./Components/Props"
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Details from "./Pages/Details";
import Footer from "./Components/Footer";
// import Notfund from "./Pages/Notfund";
import Fetch from "./Pages/Fetch";
import SignUP from "./Pages/SignUP";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import {Toaster} from "react-hot-toast";
import Counter from "./Components/Counter"
import Upload from "./Components/Upload";



const App = () => {
  const token = localStorage.getItem('token')
  return (
<div>
    <Toaster/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/"/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/upload" element={<Upload />} />
      {/* <Route path="/About" element={<About />} /> */}
      
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      {/* <Route path="/about/service" element={<Service />} /> */}
      {/* <Route path="/about/cars" element={<Cars />} /> */}
      <Route path="/details/:user" element={<Details />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login"/>}/>
 
      {/* <Route path="*" element={<Notfound />} /> */}
      
    </Routes>
    <Footer/>
    </div>
  
  );
};

export default App;
{/* // <div><Props/></div> */}
