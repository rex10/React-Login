import React from 'react';
import './NoteItem.styles.scss';
import { useDispatch } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';


const NoteItem = ({ index, title, content, onItemClicked}) => {
  const dispatch = useDispatch()

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(index))
    dispatch(inputActions.resetInputs())
  }
  return (
    <div className="NoteItem__container">
    <div
    className="NodeItem__container__div"
      role="button"
      onClick={onItemClicked}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      
    </div>
    <button className="btnDelete" onClick={deleteNote}>X</button>
    </div>
  );
};

export default (NoteItem);
