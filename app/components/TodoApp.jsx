var React = require("react");
var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText:"",
      todos: [
        {
          id:uuid(),
          text: "Walk the dog",
          completed:false
        },
        {
          id:uuid(),
          text: "Ngapain kek",
          completed:true
        },
        {
          id:uuid(),
          text: "Lalalala",
          completed:false
        },
        {
          id:uuid(),
          text: "Ngapain yha",
          completed:false
        }
      ]
    };
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
