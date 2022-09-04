import React, { useContext, useState } from 'react'
import MainContext from '../context/mainContext'
import BuyTicket from './BuyTicket'

function Seats({ picked, seatIndex, action, setSeatIndex, user, setPickedSeats, pickedSeats }) {
    const { movies } = useContext(MainContext)

    const getClass = (item, index) => {
        let result = item.reservedBy === '' ? "seats" : "seats checked"
        if (index === seatIndex) result += " border"
        return result
    }

    console.log(seatIndex);
    return (
        <div>
            <div className='all-seats'>
                {picked.map((x, i) => <div className={getClass(x, i)} key={i} onClick={() => setSeatIndex(i)}>
                    <div onClick={() => setPickedSeats(i)} >

                        <button onClick={action}>Pick this</button>
                    </div>
                </div>)}
            </div>
            <div>
                <BuyTicket picked={picked} seatIndex={seatIndex} pickedSeats={pickedSeats} user={user} />
            </div>
        </div>


    )
}

export default Seats
