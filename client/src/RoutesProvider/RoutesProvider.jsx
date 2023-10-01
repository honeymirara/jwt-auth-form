import { Route, Routes } from 'react-router-dom'
import Login from '../page/Login/Login'
import Register from '../page/Register/Register'
import Home from '../page/Home/Home'

export default function RoutesProvider(isAuth) {
    if (isAuth) {
        return (
            <Route>
                <Route path='/home' element={<Home />} />
            </Route>)
    } else {
        return (<Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reg' element={<Register />} />
        </Routes>
        )


    }
}

