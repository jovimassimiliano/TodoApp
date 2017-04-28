var React = require("react");
var moment = require("moment");
var Todo = React.createClass({

  render: function(){
    var {id,text,completed,createdAt,completedAt} = this.props;
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
          this.props.onToggle(id);
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

module.exports = Todo;
