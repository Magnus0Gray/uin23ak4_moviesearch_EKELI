import { useState } from 'react'

export default function Search({ setSearch, getMovies }) {
    const [inputvalue, setInputvalue] = useState('')
    const [isValid, setIsValid] = useState(true)

    const handleSearch = (event) => {
        console.log(event.target.value)
        setInputvalue(event.target.value)
         
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }
    const handleClick = (event) => {
        if (inputvalue.length >= 4) {
            setSearch(inputvalue)
            getMovies()
            setIsValid(true)
        }
        else
            setIsValid(false)
	}



    return (<>
        {isValid === false ? <p className="error-text">Please use 4 letters or more.</p> : null}
        <form onSubmit={handleSubmit}>
            <input type="search" name="search" placeholder="James Bond..." onChange={handleSearch} />
            <button type="submit" onClick={handleClick}>Search</button>
        </form>
        </>
    )
}