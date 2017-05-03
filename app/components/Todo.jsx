var React = require("react");
var moment = require("moment");
var {connect} =require("react-redux");
var actions = require("actions");
export var Todo = React.createClass({

  render: function(){
    var {id,text,completed,createdAt,completedAt,dispatch} = this.props;
    var todoClassName = completed ? "todo container__completed" : "todo";
    var renderDate = () => {
      var message = "Created";
      var currentTime = createdAt;

      if(completed){
        message = "Completed";
        currentTime = completedAt;
      }

      return message + " " + moment.unix(currentTime).format("MMM D YYYY @ h:mm A");

    };
    return(
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-dates">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo)
