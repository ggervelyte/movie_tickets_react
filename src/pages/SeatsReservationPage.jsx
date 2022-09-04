import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../context/mainContext'
import Seats from '../components/Seats'

function SeatsReservationPage() {
    const { seat, socket, user } = useContext(MainContext)
    // console.log(seat)
    // console.log(user);
    const [seatIndex, setSeatIndex] = useState(0)
    const [pickedSeats, setPickedSeats] = useState([])

    const makeReservation = () => {
        socket.emit("reservation", { seatIndex, pickedSeats })
    }

    return (
        <div>
            <h3>Select seat</h3>
            <h3>Username: {user && user.user.username}</h3>
            <h3>Money: {user && user.user.money} $</h3>
            <div className='all-seats'>
                <Seats seatIndex={seatIndex} action={makeReservation}
                    setSeatIndex={setSeatIndex} setPickedSeats={setPickedSeats} pickedSeats={pickedSeats}
                    user={user}
                    picked={seat} />
            </div>
        </div>

    )
}

export default SeatsReservationPage
