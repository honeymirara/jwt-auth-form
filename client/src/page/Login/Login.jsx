import Header from '../../components/Header/Header'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({ email: '', password: '' })

    async function sendData() {
        console.log(data)
    }

    async function change(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div>
                <Header />
                <h1>Sign In</h1>
                <p>Sign In
                    Log in to access your account or create one. Verify your email for seamless access.
                    email
                    Your email
                    password
                    Must be at least 8 characters.
                    Continue
                    Not registered yet? Sign Up</p>
                <div className={style.inputForm}>
                    <div>
                        <p>email</p>
                        <input type="text" placeholder='Your email' onChange={change} />
                    </div>
                    <div>
                        <p>password</p>
                        <input type="text" placeholder='Must be at least 8 characters. ' onChange={change} />
                    </div>

                </div>
                <div className={style.button} onClick={sendData}>Continue</div>
                <div>
                    Not registered yet? <span> <Link to={'/reg'}>Sign Up</Link></span>
                </div>
                <div>Login</div>
            </div>

        </>
    )
}
