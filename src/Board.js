import React from "react"
import Square from "./Square.js"
function Board(props) {
    return(
         <div className="board">
             {props.positions.map((index, y) => 
                 index.map((i, x) => 
                 <div key={x} onClick={() => props.updateCPosition([x, y])} >
                     <Square   
                         value={props.positions[x][y]} 
                         className="square"
                         />
                 </div>
                 )
             )}

         </div>
    )
}

export default Board