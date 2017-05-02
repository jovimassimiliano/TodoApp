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
      type: "SHOW_TOGGLE_COMPLETED"
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
});
