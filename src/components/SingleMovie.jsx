import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/mainContext'

function SingleMovie({ movies, index }) {
    const { seat, setMovieIndex } = useContext(MainContext)
    const nav = useNavigate()
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    function handleNav() {
        setMovieIndex(index)
        nav('/seats')
    }

    return (
        <section className='single-movie'>
            <img src={IMGPATH + movies.poster_path} alt="" />
            <div className='movie-info'>
                <h3>{movies.original_title}</h3>
                <span>{movies.vote_average}</span>
            </div>
            <div className='asd'>
                <h3>Seats left:   {seat.length} </h3>
                <button onClick={handleNav}>Reserve seats</button>
            </div>

        </section>
    )
}

export default SingleMovie
