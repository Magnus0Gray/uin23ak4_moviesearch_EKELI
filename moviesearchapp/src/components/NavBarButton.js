//import { useState } from "react";

//*******ikke lenger i bruk, beholdes kun for referanse******

export default function NavBarButton({ buttonlabel, buttonID }) {
    /*const [selected, setSelected] = useState(false)

    //const btnID = buttonID;

    const Select = (buttonRef) => {
        //setSelected(true)
       //buttonRef.setAttribute("class", "categoryButtonSelected")
        let findselected, i
        let clearselected

        clearselected = document.getElementsByClassName("categoryButtonSelected")
        for (i = 0; i < clearselected.length; ++i)
           // clearselected[i].setSelected(false);
            clearselected[i].setAttribute("class", "categoryButton")

        findselected = document.getElementsByClassName("categoryButton")
        for (i = 0; i < findselected.length; ++i) {
            //console.log(findselected[i].getAttribute("btnid"))
            //console.log(buttonID)
            if (findselected[i].getAttribute("btnid") == buttonID) {
                findselected[i].setAttribute("class", "categoryButtonSelected")
              
            }
          }
           
           //



    }

    if (buttonID === 0) {
        return (
            <button btnid={buttonID} onClick={() => Select(this)} className="categoryButtonSelected"> <h3>{buttonlabel}</h3></button>)
    }
    else
    {
        return (
            <button onClick={Select} btnid={buttonID} className="categoryButton"> <h3>{buttonlabel}</h3></button>
           // <button onClick={Select} className={selected ? "categoryButtonSelected" : "categoryButton"}> <h3>{buttonlabel}</h3></button>
        )
    }*/

     return (<button  btnid = { buttonID } className = "categoryButton" > <h3>{buttonlabel}</h3></button >)

}

/*function DeSelect(){
    setSelected(false)
}*/