import Search from './Search';
import SearchResults from './SearchResults';



export default function Main({ movies, searchTerm, setSearchTerm, search, setSearch, getMovies }) {
    return (
        <>
            <Search setSearchTerm={setSearchTerm} setSearch={setSearch} getMovies={getMovies} />
            <SearchResults searchTerm={searchTerm} movies={movies} search={search}/>
        </>
    );
}

/**/