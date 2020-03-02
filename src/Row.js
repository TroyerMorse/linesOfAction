import React from "react"
import Square from "./Square.js"
function Row(props) {

    return(
        <div>
            <div className="row">
                <Square whichVal={1} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={2} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={3} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={4} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={5} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={6} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={7} whichRow={props.whichRow} turn={props.turn}/>
                <Square whichVal={8} whichRow={props.whichRow} turn={props.turn}/>
            </div>
        </div>
    )
}

export default Row