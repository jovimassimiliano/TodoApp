var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");
var TodoAPI = require("TodoAPI");

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText:"",
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(newTodo){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text: newTodo,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;

        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
  handleAddSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render:function(){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return(
      <div>
        <div className="row">
          <h1 className="page-title">Todo List</h1>
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
              <TodoSearch onSearch={this.handleAddSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <TodoForm onSetTodo={this.handleAddTodo}/>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
