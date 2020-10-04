import React from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../../redux/actions/notes";

import styles from "./styles.module.css";

const enhance = connect(
  ({ notes }) => ({ notes }),
  { addNote, deleteNote }
);

class NotesList extends React.Component {

  componentDidUpdate() {
      const { notes } = this.props;
      localStorage.setItem('notes', JSON.stringify(notes));
  }

  componentWillUnmount() {
      // localStorage.clear()
  }

  render() {
    if (!this.props.notes.length) {
      return this.renderAddButton();
    }
    return (
      <ul className={styles["note-list"]}>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} onClick={() => this.onDeleteClick(index)}>
              {this.renderNote(note)}
              {this.renderAddButton(index)}
            </li>
          );
        })}
      </ul>
    );
  }

  renderNote = note => <div className={styles["note-list-item"]}>{note}</div>;

  renderAddButton = (index = 0) => (
    <button
      data-index={index}
      className={styles["add-note"]}
      onClick={this.onAddButtonClick}
    >
      + add note
    </button>
  );

  onAddButtonClick = e => {
    e.stopPropagation()
    const text = window.prompt("Note text:");
    text && this.props.addNote(text, e.target.dataset.index);
  };

  onDeleteClick = idx => {
    const confirm = window.confirm("Are you sure you want to delete this note?");
    confirm && this.props.deleteNote(idx);
  };
}

export default enhance(NotesList);
