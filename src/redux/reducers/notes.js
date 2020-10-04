import { ADD_NOTE, DELETE_NOTE } from "../actions/notes";
import NoteStorage from "../store/NotesStorage";

const initState = NoteStorage.getNotesList();

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      const index = +action.afterIndex;
      return [
        ...state.slice(0, index + 1),
        action.text,
        ...state.slice(index + 1)
      ];
    case DELETE_NOTE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
