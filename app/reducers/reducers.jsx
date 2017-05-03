var uuid = require("node-uuid");
var moment = require("moment");

export var searchTextReducer = (state = "",action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
      break;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false,action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
      break;
    default:
      return state;
  }
};

export var todoReducer = (state = [],action) => {
  switch (action.type) {
    case "ADD_TODO":
      return[
        ...state,
        {
          id:uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      break;
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if(todo.id === action.id){
          var completed = !todo.completed;
          return{
            ...todo,
            completed: completed,
            completedAt: completed ? moment().unix() : undefined
          };
        }
      });

    default:
      return state;
  }
};
