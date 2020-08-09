import { ADD_NOTE, DELETE_NOTE } from "../actions/notes";

const initState = ["note 1", "note 2", "note 3", "note 4"];

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        action.text,
      ];
    case DELETE_NOTE:
      return [
        ...state.slice(0, action.afterIndex),
        ...state.slice(action.afterIndex + 1)
      ];
    default:
      return state;
  }
}
