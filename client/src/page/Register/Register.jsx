import Header from '../../components/Header/Header'
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function Register() {
    const [data, setData] = useState({ name: '', surname: '', email: '', password: '' })


    async function sendData() {
        console.log(data)
        const response = await axios.post('http://localhost:3001/api/reg', data);
        console.log(response.data[0])
    }

    async function change(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Header />
            <div className={style.wrapper}>

                <h1>Welcome, let's create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                <div className={style.inputForm}>
                    <div>
                        <p>name</p>
                        <input name='name' type="text" placeholder='Your Name' onChange={change} />
                    </div>
                    <div>
                        <p>surname</p>
                        <input name='surname' type="text" placeholder='Your Surname' onChange={change} />
                    </div>
                    <div>
                        <p>email</p>
                        <input name='email' type="text" placeholder='Your email' onChange={change} />
                    </div>
                    <div>
                        <p>password</p>
                        <input name='password' type="text" placeholder='Your password' onChange={change} />
                    </div>
                    <div className={style.buttonTag} onClick={sendData} >Continue</div>

                    <div>Not registered yet? <span><Link to={'/'}>Sign In</Link></span></div>
                </div>
            </div>

        </>

    )
}
