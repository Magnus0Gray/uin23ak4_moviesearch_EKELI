import MovieCard from './MovieCard';

export default function SearchResults({ movies, searchTerm }) {
    return (<>
        {movies !== undefined
            ? <h2>Results for {searchTerm}</h2>
            : null
        }
        <section className="searchresults">
            {movies !== undefined
                ? movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))

                : <p className="error-text"> No results found </p>}
            
        </section>
        </>
    )
}