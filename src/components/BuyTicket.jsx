import React, { useContext } from 'react'
import MainContext from '../context/mainContext';

function BuyTicket({ pickedSeats, user }) {
    const { movies, movieIndex } = useContext(MainContext)
    // console.log(user);
    // console.log(movies[movieIndex].title);
    const prices = pickedSeats * 7.99
    function buy() {
        return user.user.money - prices

    }

    return (
        <div>
            <h3>Seats selected: {pickedSeats} <br /> to movie: {movies[movieIndex].title}</h3>
            <h3>Price: {prices}</h3>
            {movies[movieIndex].vote_average <= 7.2 && user.user.age <= 17 ? <h3>Cant buy</h3> : <button onClick={buy}>Buy tickets</button>}

        </div>
    )
}

export default BuyTicket
