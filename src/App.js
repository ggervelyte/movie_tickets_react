import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContext from './context/mainContext'
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import SeatsReservationPage from './pages/SeatsReservationPage';
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react';
const socket = io.connect('http://localhost:4000')

function App() {
    const [user, setUser] = useState(null)
    const [seat, setSeat] = useState([])
    const [movies, setMovies] = useState([])
    const [movieIndex, setMovieIndex] = useState([])
    // const getData = async () => {
    //     const response = await fetch("http://localhost:4000/get_seats")
    //     const data = await response.json()
    //     setSeat(data.seats)
    //     console.log(data.seats);
    // }

    useEffect(() => {
        socket.on('log', data => {
            setSeat(data)
            console.log(data);
        })
    }, [])


    return (
        <div className="App">
            <MainContext.Provider value={{ user, setUser, socket, seat, movies, setMovies, movieIndex, setMovieIndex }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/movies' element={<MovieListPage />} />
                        <Route path='/seats' element={<SeatsReservationPage />} />
                    </Routes>
                </BrowserRouter>
            </MainContext.Provider>

        </div>
    );
}

export default App;
