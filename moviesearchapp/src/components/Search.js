export default function Search({ setSearch, getMovies }) {

    const handleSearch = (event) => {
        //console.log(event.target.value)
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="James Bond..." onChange={handleSearch} />
            <button type="submit" onClick={getMovies}>Search</button>
        </form>
    )
}