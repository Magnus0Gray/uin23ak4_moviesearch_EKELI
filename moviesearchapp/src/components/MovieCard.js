import { useEffect, useState } from 'react';

export default function MovieCard({ movie }) {
    const [details, setDetails] = useState([])

    const getMovieDetails = async () => {
        const detailedResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=9b8e201b`)
        const detailedData = await detailedResponse.json()
        console.log(detailedData)
        setDetails(detailedData)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

	return (
        <article className="movie-card">
            {movie.Poster === "N/A"
                ? <img src="https://i.redd.it/m7uvydk2svda1.png" alt="placeholder poster" />
                : <img src={movie.Poster} alt={movie.Title} />}
            <h3>{movie.Title}</h3>

            <h4>Released: {movie.Year}</h4>
            <h4>Genre: {details.Genre}</h4>
            <h4>Director: {details.Director}</h4>
            <h4>Actors: {details.Actors}</h4>
            {details.Awards === "N/A"
                ? null
                : <h4>Awards: {details.Awards}</h4>}


        </article>
		)

}