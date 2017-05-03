var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.todos.value;

    if(newTodo.length > 0){
      this.refs.todos.value = "";
      dispatch(actions.addTodo(newTodo));
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

export default connect()(TodoForm);
