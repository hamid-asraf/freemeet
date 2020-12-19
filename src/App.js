import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Cards from "./Cards";
import Bottom from "./Bottom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";



function App() {
  return (
    <div className="App">     
      <Router>        
        <Switch>
          <Route path="/profile">
            <h3>This is profile</h3>
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <Bottom />
          </Route>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
