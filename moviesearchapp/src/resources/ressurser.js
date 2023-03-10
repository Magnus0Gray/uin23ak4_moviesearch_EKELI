const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },

]

export default resources
/*
function genNav()
{
    console.log(resources)
    let navHTML = ""
    let classToUse

    resources.map((titler, index) =>
    {
        if (index == 0)
            classToUse = "categoryButtonSelected"
        else
            classToUse = "categoryButton"
        navHTML +=

        `
            <button onclick="replaceContent(${index}, this, false)" class=${classToUse}>
                <h3>${titler.category}</h3>
            </button>`
    })

    document.querySelector("#navBar").innerHTML = navHTML
    console.log(navHTML)

    replaceContent(0, null, true)
}

function replaceContent(buttonID, buttonRef, isInit) {

    if (isInit == false)
    {

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
}*/