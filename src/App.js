import React, {useState} from 'react';
import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Game from "./Game.js";
import Loading from "./Loading.js"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({value: ''});
  return (
    <div className="App">
      {isLoading ? <Loading /> : isLoggedIn ? <Game user={user} setUser={setUser}/> : <Header user={user} setUser={setUser} setIsLoading={setIsLoading} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      
      
    </div>
  );
}

export default App;
