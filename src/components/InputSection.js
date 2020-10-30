import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../actions/noteActions';
import inputActions from '../actions/inputActions';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if(title && content) {
      dispatch(noteActions.addNote({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }
  const btnSave = {
      className : "btn btn-primary",
      onClick : updateNote
  }

  return (
    <div className="container">
      <div
        className="d-flex p-2 justify-content-end"
      >
      {id === -1 && <button
      className="btn btn-outline-secondary"
          onClick={addNote}
        >
         <strong>+</strong>{" Add Note"}
        </button>}
      </div>
      <form>
            <div className="form-group p-2" >
              <strong htmlFor="title" >Title:</strong>
              <input
                className="form-control"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => 
                  dispatch(inputActions.setInputTitle(e.target.value))
                }
              />
            </div>
            <div className="form-group p-2">
              <strong htmlFor="body" >Body:</strong>
              <textarea
              rows="10"
              className="form-control"
                placeholder="Body"
                id="body"
                value={content}
                onChange={e => 
                  dispatch(inputActions.setInputContent(e.target.value))
                }
              />
          </div>
          <div
            className="d-flex p-2 justify-content-end"
          >
              {id === -1 ? <button
                {...btnSave}
                disabled
              >
                {"SAVE"}
              </button> :
              
              <button
                {...btnSave}
              >{"SAVE"}</button>
              }
              {id !== -1 &&
                <button
                  onClick={deleteNote}
                  className="btn btn-danger ml-1"
                >
                  DELETE NOTE
                </button>
              }
            </div>
      </form>
    </div>
  );
};

export default InputSection;
