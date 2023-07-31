import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './index.css'

function RegisterSuccess(){
    let navigate = useNavigate();
     
    const onClickBtn=()=>{
        navigate('/login')
    }
    return(
        <div className='res-container'>

            <h1 className='text-success'>Hello user your Registration Has been Success</h1>
            <img src='https://www.pngitem.com/pimgs/m/509-5099446_correct-icon-png-transparent-png.png' className='img'/>
            <button type='button' className='button btn btn-success' onClick={onClickBtn}>Login</button>
        </div>
    )
}
export default RegisterSuccess;