import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/mainContext'

function UsersLogin() {
    const { setUser, socket } = useContext(MainContext)
    const userLogin = useRef()
    const userPwd = useRef()
    const nav = useNavigate()

    async function http(url, data) {
        const options = {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        }

        const res = await fetch("http://localhost:4000" + url, options)
        return res.json()
    }

    async function login() {
        const user = {
            username: userLogin.current.value,
            password: userPwd.current.value
        }

        const result = await http('/login', user)
        console.log(result);

        setUser(result.data)
        socket.emit('login', result.data)
        nav('/movies')

    }

    return (
        <div>
            <section className='reg-form'>
                <h2>Login</h2>
                <input ref={userLogin} type="text" placeholder='John...' />
                <input ref={userPwd} type="text" placeholder='Password' />
                <button onClick={login}>Login</button>
            </section>
        </div>
    )
}

export default UsersLogin
