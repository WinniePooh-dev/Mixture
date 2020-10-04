export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export function addNote(text, afterIndex) {
  return {
    type: ADD_NOTE,
    text,
    afterIndex
  };
}

export function deleteNote(index) {
  return {
    type: DELETE_NOTE,
    index
  };
}
