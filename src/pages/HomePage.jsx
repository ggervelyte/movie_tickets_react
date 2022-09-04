import React from 'react'
import UsersRegister from '../components/UsersRegister'
import UsersLogin from '../components/UsersLogin'

function HomePage() {
    return (
        <main className='home-pg'>
            <section className='reg'>
                <UsersRegister />
            </section>
            <section className='log'>
                <UsersLogin />
            </section>

        </main>
    )
}

export default HomePage
