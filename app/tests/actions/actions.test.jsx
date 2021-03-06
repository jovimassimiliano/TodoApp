var expect = require("expect");
var actions = require("actions");

describe("actions", () => {
  it("should generate search text", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "test"
    }

    var result = actions.setSearchText(action.searchText);
    expect(result).toEqual(action);
  });

  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "test"
    };

    var result = actions.addTodo(action.text);
    expect(result).toEqual(action);
  });

  it("should show toggle completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    var result = actions.showToggleCompleted();

    expect(result).toEqual(action);
  });

  it("should toggle todo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 1
    };

    var result = actions.toggleTodo(action.id);
    expect(result).toEqual(action);
  });

  it("should add todos action", () => {
    var todos = [{
      id: 112,
      text: "anything",
      completed: false,
      completedAt: undefined,
      createdAt: 3000
    }];

    var action = {
      type: "ADD_TODOS",
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  })
});
