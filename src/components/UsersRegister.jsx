import React, { useRef } from 'react'

function UsersRegister() {
    const nameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    const ageRef = useRef()

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

    async function register() {
        const user = {
            username: nameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            age: ageRef.current.value
        }

        const result = await http('/register', user)
        console.log(result);
    }

    return (
        <section className='reg-form'>
            <h2>Register</h2>
            <input ref={nameRef} type="text" placeholder='John...' />
            <input ref={passOneRef} type="text" placeholder='Password' />
            <input ref={passTwoRef} type="text" placeholder='Repeat password' />
            <input ref={ageRef} type="text" placeholder='Your age...' />
            <button onClick={register}>Register</button>
        </section>


    )
}

export default UsersRegister
