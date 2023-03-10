import React from 'react';
//import NavBarButton from './NavBarButton';
import resources from '../resources/ressurser';
import {NavLink } from 'react-router-dom';
//import resources from './resources.json'



export default function NavBar() {
    return (
        <nav>
            {resources.map((resource, index) => (

                <NavLink className={({ isActive }) => (isActive ? 'categoryButtonSelected' : 'categoryButton')} key={index} to={resource.category}>
                    <button><h3>{resource.category}</h3></button>
                </NavLink>
            ))}
        </nav>
    );
}

//*** andre forsøk på løsninger *****
//<NavBarButton key={index} buttonlabel={resource.category} buttonID={index} />
/*class NavBar extends React.Component {
    constructor(props)
    {
        super(props);
        this.replaceContent = this.replaceContent.bind(this);
    }

    componentDidMount() {
        if (this.first) return; this.first = true;
        //console.log(resources)

        // navHTML = this.mapButtons();

        let navHTML = ""
        let classToUse

        resources.map((titler, index) => {
            if (index === 0)
                classToUse = "categoryButtonSelected"
            else
                classToUse = "categoryButton"
            // < button onClick = {()=> this.replaceContent(${ index }, this, false)} class= ${ classToUse } >
            navHTML += `
                <button buttonid="btn${index}" class=${classToUse} >
                <h3>${titler.category}</h3>
            </button>
                       `;


            return true
        })
        document.querySelector("#navBar").innerHTML = navHTML
        //console.log(navHTML)

        resources.map((titler, index) => {
            const btn = document.querySelector(`[buttonid="btn${index}"]`);
            console.log(btn)
            if (btn)
                btn.addEventListener('click', () => {this.replaceContent(index, btn, false)})
        })

        this.replaceContent(0, null, true)
    }

    replaceContent(buttonID, buttonRef, isInit)
    {
        console.log("replace content ran")
        if (isInit === false) {

            //console.log(buttonRef)
            let clearselected, i

            clearselected = document.getElementsByClassName("categoryButtonSelected")
            for (i = 0; i < clearselected.length; ++i)
                clearselected[i].setAttribute("class", "categoryButton")
            // console.log(resources[buttonID])

            buttonRef.setAttribute("class", "categoryButtonSelected")
        }

        //console.log(buttonStyleRef)

        let contentHTML = ""
        contentHTML += `<h2>${resources[buttonID].category}</h2>`
        contentHTML += `<span class="articleText">${resources[buttonID].text}</span>`
        contentHTML += `<section class=sources><ul></ul></section>`

        document.querySelector("#mainArticles").innerHTML = contentHTML


        let listHTML = ""
        resources[buttonID].sources.map(kilder => listHTML +=
            `
          <li>
            <a href="${kilder.url}">
                ${kilder.title}
            </a>
          </li>`)

        document.querySelector("#mainArticles ul").innerHTML = listHTML
    }

    render() {
        return <nav id="navBar"></nav>
    }

 };

export default NavBar */