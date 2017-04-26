var React = require("react");
var TodoList = require("TodoList");
var TodoForm = require("TodoForm");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText:"",
      todos: [
        {
          id:1,
          text: "Walk the dog"
        },
        {
          id:2,
          text: "Ngapain kek"
        },
        {
          id:3,
          text: "Lalalala"
        },
        {
          id:4,
          text: "Ngapain yha"
        }
      ]
    };
  },
  handleAddTodo: function(newTodo){
    alert("new todo: " + newTodo);
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
        <TodoList todos={todos}/>
        <TodoForm onSetTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
