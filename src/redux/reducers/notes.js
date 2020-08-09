import { ADD_NOTE, DELETE_NOTE } from "../actions/notes";
import CityStorage from "../store/NotesStorage";

const initState = CityStorage.getNotesList();

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
