import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import Main from './main.jsx';
import About from './about.jsx';
import NotFound from './not_found.jsx';


class App extends React.Component {
    constructor(){
        super();
    }
    
  render() {
    return(
        <Router>
            <React.Fragment>
                <div className='link'>
                <Link to="/">Main</Link><br />
                <Link to="/about">About</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/about" exact component={About} />
                    <Route path="/not_found" component={NotFound} />
                    <Redirect to='/not_found' /> 
                </Switch>
            </React.Fragment>
        </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));