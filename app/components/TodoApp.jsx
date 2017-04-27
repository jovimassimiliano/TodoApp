var React = require("react");
var uuid = require("node-uuid");

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
  componenDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(newTodo){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text: newTodo,
          completed: false
        }
      ]
    });
  },
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
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
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleAddSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoForm onSetTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
