import './css/main.css';
import { Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Layout from './components/Layout';
import { useState, useEffect } from 'react'

function App() {
    const [movies, setMovies] = useState([])
    //Set search with default
    const [search, setSearch] = useState('James Bond')
    //full final term, used for display only
    const [searchTerm, setSearchTerm] = useState('James Bond')

    const getMovies = async () => {
        const searchResponse = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=9b8e201b&type=movie`)
        const searchData = await searchResponse.json()
        console.log(searchData.Search)
        setMovies(searchData.Search)


       
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Main movies={movies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSearch={setSearch} getMovies={getMovies} />} />
            </Route>
        </Routes>
    )
}

export default App;