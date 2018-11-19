import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {

  render(){
    return(
      <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?"autoFocus></input>
      </header>
    );
  }
}

class Main extends React.Component {

  render(){
    return(
      <section className="main" style={{display:'none'}}>
      <input type="checkBox"id="toggle-all" className="toggle-all"></input>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
      </ul>
      <Footer />
      </section> 
    );
  }
}

class Lists extends React.Component { //включить для дальнейшей разработки

    render(){
      return(
        <li>
        <div className="view">
        <input type="checkBox" className="toggle"></input>
        <label></label>
        <button className="destroy"></button>
        </div>
        </li>
      );
    }
  }

class Footer extends React.Component {

  render(){
    return(
      <footer className = "footer">
        <span className="todo-count"></span>
        <Filters />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

class Filters extends React.Component {

  render(){
    return(
      <ul className="filters">
            <li>
				<a href="#/" className="selected">All</a>
			</li>
			<li>
			<a href="#/active">Active</a>
			</li>
			<li>
		  <a href="#/completed">Completed</a>
			</li>
      </ul>
    );
  }
}

class Info extends React.Component {

    render(){
      return(
        <footer className="info">
              <p>Double-click to edit a todo</p>
              <p>Written by <a href="http://twitter.com/lukeed05">Luke Edwards</a></p>
              <p>Refactored by <a href="https://github.com/xorgy">Aaron Muir Hamilton</a></p>
              <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      );
    }
  }

class Todo extends React.Component {

  render(){
    return(
      <div>
        <section className="todoapp">
        <Header />
        <Main />
        </section>
        <Info />
        </div>
    );
  }
}
 
ReactDOM.render(<Todo />,document.getElementById('root'))