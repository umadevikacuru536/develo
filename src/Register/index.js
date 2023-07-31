import './index.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App1(){
    const [fullname,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [skills,setSkills] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
   let navigate = useNavigate()
const [data,setData] = useState([])

 const userData = {
    fullname: fullname,
    email:email,
    mobile:mobile,
    skills:skills,
    password:password,
    confirmPassword:confirmPassword,

 }
 console.log(userData)
 const onSubmitForm=e=>{
    e.preventDefault();
    if(fullname && email && mobile && skills &&  password && confirmPassword !== ''){
        axios.post('http://localhost:3008/register/',userData)
        .then(response=>{
            setData(response.userData)
            if(response.status === 200){
              toast.error('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate("/reg")
            } 
        })
        .catch(error=>{
            console.log(error.response.userData)
            window.alert(error.response.userData)
        })

    }else{
       toast.success("Enter requied details")
    }
 }
 return(
    <div className='container'>
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
    <Form onSubmit={onSubmitForm}>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setFullName(e.target.value)} value={fullname} >
        <Form.Label className='label'>Fullname</Form.Label><br/>
        <Form.Control type="" className='control' placeholder="fullname" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setEmail(e.target.value)} value={email} >
        <Form.Label className='label'>Email</Form.Label><br/>
        <Form.Control type="" className='control' placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setMobile(e.target.value)} value={mobile} >
        <Form.Label className='label'>mobile</Form.Label><br/>
        <Form.Control type="" className='control' placeholder="mobile" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setSkills(e.target.value)} value={skills} >
        <Form.Label className='label'>skills</Form.Label><br/>
        <Form.Control type="" className='control'  placeholder="skills" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setPassword(e.target.value)} value={password} >
        <Form.Label className='label'>password</Form.Label><br/>
        <Form.Control type="password" className='control' placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3 w-75" controlId="fullname" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} >
        <Form.Label className='label'>confirmPassword</Form.Label><br/>
        <Form.Control type="password" className='control' placeholder="confirmpassword" />
      </Form.Group>
      <Button variant='primary' className='button' type='submit'>Register</Button>
    </Form>
    
    <div>
        <img src="https://img.freepik.com/free-vector/modern-online-registration-compositio_23-2147993862.jpg?w=740&t=st=1690535301~exp=1690535901~hmac=905451f578b1b95c25f34802851fe45c9067916d51b1a009dbf2f6d553e5e724" className='img'/>
    </div>
    </div>
 )
}
export default App1;