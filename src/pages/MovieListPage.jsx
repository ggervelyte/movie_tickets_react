import React, { useContext, useEffect, useState } from 'react'
import SingleMovie from '../components/SingleMovie'
import MainContext from '../context/mainContext'

function MovieListPage() {
    const { movies, setMovies } = useContext(MainContext)

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify()
        }

        fetch('http://localhost:4000/get_movie', options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                // console.log(data.results)
            })
    }, [])

    return (

        <section className='movie-list'>
            <h1>Movies list</h1>
            <div className='all-movie-list'>
                {movies.map((x, i) => <SingleMovie key={i} movies={x} index={i} />)}
            </div>
        </section>

    )
}

export default MovieListPage
