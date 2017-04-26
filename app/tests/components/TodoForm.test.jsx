var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var TodoForm = require("TodoForm");

describe("Todo Form",() => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should show correct input value", () => {
    var todo = "play play";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todos.value = todo;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(todo);

  });

  it("should show incorrect input value", () => {
    var todo = "";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todos.value = todo;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
