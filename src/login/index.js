import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './index.css'
import axios from 'axios';
import {useState} from 'react';

import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form'

function Login(){
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [skills,setSkills] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

const [data,setData] = useState([])
    let navigate = useNavigate();
     
    
    const userData = {
     
        email:email,
        password:password,
       
     }
     console.log(userData)
 const onSubmitForm=e=>{
    e.preventDefault();
    if(fullname && email && mobile && skills &&  password && confirmPassword !== ''){
        axios.post('http://localhost:3008/login',userData)
        .then(response=>{
            setData(response.userData)
            if(response.status === 200){
             let jwtToken = response.data.jwtTokenlocalStorage.setItem('token',jwtToken)
             toast.warn('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })

                navigate("/home")
            } 
        })
        .catch(error=>{
            console.log(error.response.userData)
            window.alert(error.response.userData)
        })

    }else{
        toast.warn('please enter reqiued details', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }
 }

    return(
        <div className='res-container ' style={{textAlign:"start"}}>
            
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
            <h4>Doesn't having account yet? <Link to ="/"><span className='text-primary'>signup</span> </Link> </h4>
            <Form onSubmit={onSubmitForm}>
            <Form.Group className="mb-3 w-25" controlId="fullname" onChange={(e)=>setEmail(e.target.value)} value={email} >
        <Form.Label className='label'>Email</Form.Label><br/>
        <Form.Control type="" className='control1' placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="fullname" onChange={(e)=>setPassword(e.target.value)} value={password} >
        <Form.Label className='label'>password</Form.Label><br/>
        <Form.Control type="password" className='control1' placeholder="password" />
      </Form.Group>
      </Form>
            <button type='button' className='button btn btn-success' >Sub</button>
        </div>
    )
}
export default Login;