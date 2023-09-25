import Header from '../../components/Header/Header'
import style from './style.module.scss'

export default function Login() {
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
                        <input type="text" placeholder='Your email'/>
                        </div>
                        <div>
                            <p>password</p>
                            <input type="text" placeholder='Must be at least 8 characters.'/>
                        </div>
                       
                    </div>
                    <div className={style.button}>Continue</div>
                    <div>
                    Not registered yet? <span>Sign Up</span>
                    </div>
                <div>Login</div>
            </div>

        </>
    )
}
