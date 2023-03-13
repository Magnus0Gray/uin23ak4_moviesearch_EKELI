import {useEffect, useState } from 'react'

export default function Search({ setSearch, getMovies, setSearchTerm }) {
    const [inputvalue, setInputvalue] = useState('')
    const [isValid, setIsValid] = useState(true)

    const handleSearch = (event) => {

        //console.log(event.target.value)
        setInputvalue(event.target.value)


        setSearch(event.target.value)
        if (event.target.value.length >= 3) {
            setSearchTerm(event.target.value)
            //getMovies()
            //setTimeout(() => { getMovies(); }, 1000);
            setIsValid(true)

            

        }
        else
            setIsValid(false)
         
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    //replaced button with live update of searchfield
   /* const handleClick = (event) => {
        console.log(inputvalue)
        if (inputvalue.length >= 3) {
            setSearchTerm(inputvalue)
            getMovies()
            setIsValid(true)
        }
        else
            setIsValid(false)
	}*/ 

    //setState is asyncronous, had to set in useeffect for them to work properly.
    useEffect(() => {
        console.log(isValid);
        if (inputvalue >= 3)
            getMovies();
    }, [isValid])

    return (<>
        {isValid === false ? <p className="error-text">Please use 3 characters or more.</p> : null}
        <form onSubmit={handleSubmit}>
            <input className="searchbox" type="search" name="search" placeholder="James Bond..." onChange={handleSearch} />
        </form>
        </>
    )
}