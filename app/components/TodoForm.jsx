var React = require("react");

var TodoForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var newTodo = this.refs.todos.value;

    if(newTodo.length > 0){
      this.refs.todos.value = "";
      this.props.onSetTodo(newTodo);
    }else{
      this.refs.todos.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todos" placeholder="What are you going to do?"/>
          <input type="submit" value="Add todo" className="button expanded"/>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
