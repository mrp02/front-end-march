import React from 'react'

import axios from "axios";
import { useFormik } from "formik"
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
        // HOW TO USE FORMIK TO COLLECT DATA
const Login = () => {
  const navigate = useNavigate();
    const URL = "https://backend-march-class.onrender.com/students/login";
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit:(values) =>{
            console.log(values);
            axios.post(URL, values)
            .then((res) => {
            // console.log(res.data);
            const token = res.data.token
            localStorage.setItem("token", token)
            toast.success("successfully toated");
            navigate("/dashboard")

            })
            .catch((err)=>{
                console.log(err);
                toast.error("unsuccessfully toated");
            })
        }
    })
  return (
    <div className="p-5">
    <form  onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
     <input
      id="email"
      name="email"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
     <input
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />

<button type="submit">Login</button>
  </form>
  </div>

  )
}

export default Login