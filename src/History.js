import React from "react"

function History(props) {
    const back = '<<<'
    const forw = '>>>'
    
    function goBack() {
        props.setHistory(() => props.history.slice(0, (props.history.length -1)))
        props.setPositions(() =>  props.history[(props.history.length -1)])
    }
    return(
        <div>
            <button className="back button" onClick={goBack}>{back}</button>
        </div>
    )
}

export default History