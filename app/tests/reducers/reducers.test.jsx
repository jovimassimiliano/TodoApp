var expect = require("expect");
var reducers = require("reducers");
var df = require("deep-freeze-strict");

describe("reducers", () => {
  describe("searchTextReducer" , () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "test"
      };

      var res = reducers.searchTextReducer(df(""),df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe("showToggleCompleted", () => {
    it("should toggle showCompleted", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      var res = reducers.showCompletedReducer(df(false) , df(action));

      expect(res).toEqual(true);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: "ADD_TODO",
        text: "hello"
      };

      var res = reducers.todoReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it("should toggle toggle", () => {
      var todos = [{
        id: "123",
        type: "TOGGLE_TODO",
        text: "something",
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var action = {
        type: "TOGGLE_TODO",
        id: "123"
      };

      var res = reducers.todoReducer(df(todos),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completedAt).toEqual(undefined);
      expect(res[0].completed).toEqual(false);
    });
  });

});
