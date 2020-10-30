import React from 'react';
import { useDispatch } from 'react-redux';
import noteActions from '../actions/noteActions';
import inputActions from '../actions/inputActions';


const NoteItem = ({ index, title, content, onItemClicked}) => {
  const dispatch = useDispatch()

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(index))
    dispatch(inputActions.resetInputs())
  }
  return (
    <div className="list-group border-bottom">
      <div
        className="list-group item p-3"
        role="button"
        onClick={onItemClicked}
      >
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">{title}</h6>
          <small className="text-muted" role="button" onClick={deleteNote} >X</small>
        </div>
          <p className="mb-1">{content}</p>
      </div>
    </div>
  );
};

export default (NoteItem);
