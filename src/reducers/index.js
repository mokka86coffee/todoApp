import { ADD_TODO } from '../actions';

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    default:
      return state;
  }
}

import { RENDER_TODO_LIST } from '../actions';

// ... initialState ...

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    // ... case ADD_TODO, and default ... :
  }
}