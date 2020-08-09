export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export function addNote(text) {
  return {
    type: ADD_NOTE,
    text,
  };
}

export function deleteNote(afterIndex) {
  return {
    type: DELETE_NOTE,
    afterIndex
  };
}
