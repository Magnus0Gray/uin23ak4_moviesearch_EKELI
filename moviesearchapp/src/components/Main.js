import Search from './Search';
import SearchResults from './SearchResults';



export default function Main({ movies, search, setSearch, getMovies }) {
    return (
        <>
            <Search setSearch={setSearch} getMovies={getMovies} />
            <SearchResults movies={movies} search={search}/>
        </>
    );
}

/**/