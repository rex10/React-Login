import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../actions/inputActions';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if(notes.length === 0) {
    return (
      <div className="container">
        <p className="d-flex justify-content-center">There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <>
      {notes.map((item, index) => {

        if(item) {
          return (
            <NoteItem
              key={index+1}
              index={index}
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </>
  );
};

export default NotesSection;
