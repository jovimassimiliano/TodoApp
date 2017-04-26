var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require('jQuery');

var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList", () => {
  it("should exist",() => {
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each todo item", () => {
    var todos = [{
      id:1,
      text:"test"
    },
    {
      id:2,
      text:"yayaya"
    }
  ];
  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  expect(todosComponent.length).toBe(todos.length);
  });
});
