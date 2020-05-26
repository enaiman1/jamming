import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Music,Trivia,About, NoMatch} from './pages'
import Header from './components/common/Header/Header'
import "./App.css";


function App(){
    return(
        <Router>
            <Header />
            <Switch>
             <Route exact path="/" component={Music} />
             <Route path="/trivia" component={Trivia} />
             <Route path="/about" component={About} />
             <Route component={NoMatch} />
             </Switch>
        </Router>
    )
}

export default App;