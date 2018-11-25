import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">{props.count}</span>
      <ul className="filters">
      <li>
          <Link to ="/todo" className={props.filter === '' ? 'selected' : null}>All</Link>
        </li>
          <li>
        <Link to="/todo/active" className={props.filter === 'active' ? 'selected' : null}>Active</Link>
        </li>
          <li>
        <Link to ="/todo/completed" className={props.filter === 'completed' ? 'selected' : null}>Completed</Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => props.onClearCompleted()}>Clear completed</button>
    </footer>
  );
}

function Header(props) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(event) => {
          if (event.keyCode === 13 && event.target.value.trim()) {
            props.onCreate(event.target.value);
            event.target.value = '';
          }
        }}
      />
      <input 
        id="toggle-all" 
        className="toggle-all" 
        type="checkbox"
        onClick={(event) => this.props.toggleAll()}
      />
			<label>Mark all as complete</label>
      <div className="loader" />
    </header>
  );
}

class Item extends React.Component {
  constructor(){
    super();
    this.state = {
      editable: false,
    }
  }

  render() {
    return (
      <li data-id={this.props.id} className = {this.props.checked ? 'completed' : null}>
        <div className="view">
          <input
            className="toggle"
            checked={this.props.checked}
            type="checkbox"
            onChange={(event) => this.props.onEdit(this.props.id, { checked: event.target.checked })}
          />
          {this.renderContent()}
          <label onDoubleClick= {() => this.setState({editable: true})}>{this.props.value}</label>
          <button className="destroy" onClick = {() => this.props.onDestroy(this.props.id)}></button>
        </div>
      </li>
    );
  }



  renderContent(){
    if(this.state.editable){
      return (
        <input 
        autoFocus
        className = 'item_content'
        defaultValue={this.props.value}
        onKeyDown={(event) => {
          if (event.keyCode === 13 && event.target.value.trim()) {
            this.props.onEdit(this.props.id, { value: event.target.value })
            this.setState({editable:false})
          }
        }}
        onBlur = {() => this.setState({editable:false}) }/>
      )
    }
  }
}

class ToDo extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      filter: '',
    };

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
  }

  onCreate(value) {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: Date.now(),
          checked: false,
          value,
        },
      ],
    });
  }
  toggleAll(data) {
    console.log('toggleAll', data)
  }

  onEdit(id, data) {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...data,
          };
        }
        return item;
      }),
    });
  }

  onClearCompleted(){
      this.setState({
        list: this.state.list.filter(element => !element.checked)
    });
  }
    
  
  onDestroy(id) {
    this.setState({
      list: this.state.list.filter(element => element.id !== id)
  });
  }
  
  render() {
    const filter = this.props.match.params.filter || '';
    return (
      <section className="todoapp">
        <Header onCreate={this.onCreate} toggleAll = {this.toggleAll}/>
        <ul className="todo-list" style={{ display: 'block' }}>
          {
            this.state.list
            .filter((item) =>{
              if(filter === 'active'){
                return item.checked === false;
              }
              if(filter === 'completed'){
                return item.checked;
              }
              return true;
            })
            .map(data => (
              <Item key={data.id} {...data} onEdit={this.onEdit} onDestroy={this.onDestroy} />
            ))
          }
        </ul>
        <Footer
        filter = {this.state.filter} 
        onClearCompleted ={this.onClearCompleted} 
        count = {this.state.list.filter(item => item.checked === false).length} />
      </section>
    );
  }
}

function Main(){
  return (
    <Router>
      <React.Fragment>
         <Link to= "/">Main</Link>
         <Link to = "/todo">Todo</Link>
         <Route path="/" exact component={() => <div>Main</div>} />
      
         <Route path={['/todo' ||'/todo/:filter']} component={ToDo} />
      </React.Fragment>
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));
