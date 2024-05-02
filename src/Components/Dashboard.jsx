import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate();
  let url = "https://backend-march-class.onrender.com/students/dashboard";
  let token = localStorage.getItem("token");
  useEffect(()=>{
    axios
    .get(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application /json",
        "Accept": "application/json",
      },
    })
    .then((res)=>{
      console.log(res);
      if (res.data.status === true){
        console.log("sucess");
      }else {
        localStorage.removeItem("token")
        navigate("/login")
        // console.log(res.status);
      }
    })
  }, [])
  return (
    <div>
      <h1>Welcome to dashboard</h1>
    </div>
  )
}

export default Dashboard