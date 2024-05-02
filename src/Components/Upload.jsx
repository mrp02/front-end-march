// import React from 'react'
import React,  {useState} from 'react'
import axios from 'axios';


 const Upload = () => {
    let endPoint = 'https://backend-march-class.onrender.com/students/uploadFile';
    const [myFile, setMyfile] = useState("");
    const [myImage, setMyimage] = useState("");

    const handleFile = (e) =>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            // console.log(reader.result);
            setMyfile(reader.result)
        }
    };
    const Uploadimage = () =>{
        axios.post(endPoint, {myFile})
        .then((res)=>{
            // console.log(res.data);
            console.log(res);
            setMyimage(res.data.result.url)
        })
    }
    // console.log("hello world");
  return (
    <div>
        <input type="file" onChange={(e)=>handleFile(e)} />
        <button onClick={Uploadimage} className='btn btn-danger text-light'>upload </button>
        <img src={myImage} alt="..." />
    </div>
  )
};

export default Upload