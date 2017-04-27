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
    expect(todoApp.state.todos[0].createdAt).toBeA("number");
  });

  it("should toggle completed value when handleToggle called", () => {
    var todoText = {
      id:10,
      text:"yayaya",
      completed: false,
      createdAt:0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoText]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(10);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA("number");
  });

  it("toggle todo from complete to incomplete", () => {
    var todoText = {
      id:12,
      text:"yayaya",
      completed: true,
      createdAt:0,
      completedAt: 11
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoText]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
