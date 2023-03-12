import MovieCard from './MovieCard';

export default function SearchResults({ movies, search }) {
    return (<>
        <h2>Results for {search}</h2>
        <section className="searchresults">
            {movies.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
            ))}
        </section>
        </>
    )
}