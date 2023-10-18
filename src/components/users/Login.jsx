import React from 'react'

function Login() {
    return (
        <div className='login'>
            <input className='crede' type="text" placeholder='Unsername' required/>
            <input className='crede' type="text" placeholder='password' required/>
            <input className='sub' type="submit" value="submit"/>
        </div>
    )
}

export default Login
