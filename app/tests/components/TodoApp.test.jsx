var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require('jQuery');

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist",() => {
    expect(TodoApp).toExist();
  });
  it("should add todo to the todo states on handleAddTodo", () => {
    var todoText = "test";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe("test");
  });

  it("should toggle completed value when handleToggle called", () => {
    var todoText = {
      id:10,
      text:"yayaya",
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoText]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(10);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
