import { useEffect, useState } from 'react';
import './Signup.css'
const SignUp = () =>{
    const initailValue = {email : "",companyname : "",password : ""};
    const [val,setVal] = useState(initailValue);
    const [error,setError] = useState({})
    const [isSubmit,setSubmit] = useState(false);

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setVal({...val,[name] : value})
        console.log(val)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setError(validate(val));
        setSubmit(true);

    }

    const validate = (values) =>{
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email){
            error.email = "Email is required";
        }else if(!regex.test(val.email)){
            error.email = "This is not a valid email format"
        }
        if(!values.password){
            error.password = "Password is required";
        }
        return error;
    }

    useEffect(()=>{
        console.log(error)
        if(Object.keys(error).length === 0 && isSubmit){
            console.log(val)
        }
    })
    return(
        <>
             <div className='login-container'>

                {Object.keys(error).length === 0 && isSubmit ? (<div className='ui message success'>Signed in successfull</div>):(<div></div>)}
                <form onSubmit={handleSubmit} className="login">
                    <h1>SignUp</h1>
                    <label htmlFor="">
                        <input type="email" name = "email"className="input-form" placeholder="Email Address" value = {val.email} onChange = {handleChange}/>
                    </label>
                    <p>{error.email}</p>
                    <label htmlFor="">
                    <input type="text" name = "companyname" className="input-form" placeholder="Company Name" value={val.companyname} onChange = {handleChange}/>
                    </label>
                    <p>{error.companyname}</p>
                    <label htmlFor="">
                        <input type="password" name = "password" className="input-form" placeholder="Password" value = {val.password} onChange = {handleChange}/>
                    </label>
                    <p>{error.password}</p>
                    <button onClick = {validate}className="login-btn">Login Now</button>
                    <p className="small">Forgot your password? <a className="link" href="">Reset Password</a></p>
                    <p className="small">Do not have account? <a className="link" href="">Signup Now</a></p>
                 </form>
             </div>
        </>
    )
}

export default SignUp;