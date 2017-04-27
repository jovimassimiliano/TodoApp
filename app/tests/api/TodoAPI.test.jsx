var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("Todo API", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });

  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("set todo", () => {
    it("should set valid todos array", () => {
      var todos = [
        {
          id: 22,
          text: "testing",
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem("todos"));

      expect(actualTodos).toEqual(todos);
    });

    it("should not set valid todos array", () => {
      var todos = {
        a: "b"
      };
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem("todos")).toBe(null);
    });
  });

  describe("getTodo", () => {
    it("should return empty array for bad localStorage data", () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it("should get valid todos array", () => {
      var todos = [
        {
          id: 10,
          text: "tagaga",
          completed: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe("filterTodos", () => {
    var todos = [
      {
        id: 1,
        text: "satu",
        completed: false
      }, {
        id: 2,
        text: "dua",
        completed: true
      }, {
        id: 3,
        text: "tiga",
        completed: false
      }
    ];
    it("should return all value when showCompleted is true", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos.length).toBe(3);
    });

    it("should not return all value when showCompleted is false", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, "");
      expect(filteredTodos.length).toBe(2);
    });

    it("should sort by completed status", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos[0].completed).toBe(false);
    });

    it("should sort by incompleted status", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, "");
      expect(filteredTodos[1].completed).toBe(false);
    });

    it("should return all value if searchText is empty",() => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos.length).toBe(3);
    });
  });
});
