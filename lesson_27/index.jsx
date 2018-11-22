import React from 'react';
import ReactDOM from 'react-dom';

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">1</span>
      <ul className="filters">
        <li onClick = {() => props.setFilter('all')}>
          <a href="#/"className={props.filter === '' ? 'selected' : null}>All</a>
        </li>
        <li onClick = {() => props.setFilter('active')}>
        <a href="#/active" className={props.filter === '' ? 'selected' : null}>Active</a>
        </li>
        <li onClick = {() => props.setFilter('completed')}>
        <a href="#/completed" className={props.filter === '' ? 'selected' : null}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
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
          if (event.keyCode === 13 && event.target.value) {
            props.onCreate(event.target.value);
            event.target.value = '';
          }
        }}
      />
      <input 
        id="toggle-all" 
        className="toggle-all" 
        type="checkbox"
        // onClick={(event) => this.props.toggleAll()}
      />
			<label>Mark all as complete</label>
      <div className="loader" />
    </header>
  );
}

class Item extends React.Component {
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
          <label onDoubleClick= {() => this.props.onEditTask(this.props.id)}>{this.props.value}</label>
          <button className="destroy" onClick = {() => this.props.onDestroy(this.props.id)}></button>
        </div>
      </li>
    );
  }
}

class ToDo extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [{
        id: '1234',
        checked: true,
        value: 'Content text',
      }],
      filter: '',
    };

    this.onCreate = this.onCreate.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
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
  onEditTask(id) {
    console.log('editing', id)
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
  
  onDestroy(id) {
    console.log('destroyed', id);
    this.setState({
      list: this.state.list.filter(element => element.id !== id)
  });
  }

  setFilter(){
  console.log('xxx')
  }
  
  render() {
    return (
      <section className="todoapp">
        <Header onCreate={this.onCreate} toggleAll = {this.toggleAll}/>
        <ul className="todo-list" style={{ display: 'block' }}>
          {
            this.state.list.map(data => (
              <Item key={data.id} {...data} onEdit={this.onEdit} onDestroy = {this.onDestroy} onEditTask = {this.onEditTask}/>
            ))
          }
        </ul>
        <Footer setFilter = {this.setFilter} filter = {this.state.filter}/>
      </section>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById('root'));
