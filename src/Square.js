import React from "react"

function Square(props) {
    return(
        // Squares pre loaded at the beginning of the game
    <button className="square">{props.value === null ? props.value : props.value[0]}</button>
    )
}

export default Square