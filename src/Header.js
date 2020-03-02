import React, {useState} from "react"

function Header(props) {
    function setIsLoggedIn(e){
        props.setIsLoggedIn((prevIsLoggedIn) => prevIsLoggedIn ? false : true )
        props.setIsLoading(() => {return true})
        setTimeout(() => {
            props.setIsLoading(
              false);
          }, 1500)
        e.preventDefault()
        }


    function handleChange(event) {
        props.setUser({value: event.target.value})
      }

    function setIsLoading(event) {
    }

    return (
        <div className="header">
            <img src="https://img.icons8.com/cotton/100/000000/strategy-board.png" alt="Lines of action logo"/>
            <form className="forms" onSubmit={setIsLoggedIn}>
                <div className="inputContainer">
                    <img className="icons" src="https://img.icons8.com/material-outlined/96/000000/user--v1.png" alt="user icon" />
                    <input placeholder="First Name" type="text" value={props.user.value} onChange={handleChange}/>
                </div>
                <div className="inputContainer">
                    <img className="icons" src="https://img.icons8.com/windows/50/000000/key.png" alt="key icon"/>
                    <input placeholder="Password"  type="password"/>
                </div>
                <button className="submitt" type="submit" onClick={setIsLoading}>Enter</button>
            </form>
        </div>
    )
}

export default Header