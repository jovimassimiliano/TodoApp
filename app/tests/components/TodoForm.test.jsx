var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var {TodoForm} = require("TodoForm");

describe("Todo Form",() => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should dispatch ADD_TODO when valid todo text", () => {
    var todo = "play play";
    var action = {
      type:"ADD_TODO",
      text: todo
    };
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todos.value = todo;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it("should not dispatch ADD_TODO when invalid todo text", () => {
    var todo = "";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todos.value = todo;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
