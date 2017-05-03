var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

import TodoList from "TodoList";
import TodoForm from "TodoForm";
import TodoSearch from "TodoSearch";


var TodoApp = React.createClass({
  render:function(){
    return(
      <div>
        <div className="row">
          <h1 className="page-title">Todo List</h1>
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
              <TodoSearch/>
              <TodoList/>
              <TodoForm/>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
