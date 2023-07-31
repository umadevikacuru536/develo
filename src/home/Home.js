import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import './home.css'




function HomePage(){
//     let navigate = useNavigate();
//     const[data,setData] = useState([]);
// useEffect(()=>{
//     axios.get("http://localhost:3008/alldevelopers",{
//         headers:{
//             "token":localStorage.getItem('token')
//         }

//     })
//     .then(response =>setData(response.data))
//     .catch(error=>console.log(error.response.data))
// },[])
// useEffect(()=>{
//     if(localStorage.getItem('token') === null){
//         navigate("/")
//     }
// })

    return(


         
            <div className="card shadow">
              
              <img src="https://res.cloudinary.com/depanrxtl/image/upload/v1690798980/profle-icon-512x512-ikm84aui_x57klx.png" className="img"/>
            </div>

    

    )
}
export default HomePage;