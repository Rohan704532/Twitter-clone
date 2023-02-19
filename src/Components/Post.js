import 'bootstrap/dist/css/bootstrap.min.css'
import "./Post.css"
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';

function Login() {

    const[tweets, setTweet] = useState("")

    const navigate = useNavigate();

    const navigatetoprofile = ()=>{
        localStorage.setItem('tweets',tweets);
        navigate("/")
    }
    
    const change=e=>{
        setTweet(e.target.value)
    }

    return (
        <div className='formsign'>
            <form  className='post'>
                <div className='input'>
                    <div>
                        <label for="staticEmail2">Write a post: </label>
                        <input onChange={change} value={tweets} type="text" readonly id="staticEmail2" />
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={navigatetoprofile} className='TweCan'>Tweet</button>
                    <Link to="/"><button className='TweCan'>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Login;