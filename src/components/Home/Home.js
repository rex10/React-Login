import React from 'react';
import InputSection from '../InputSection';
import NotesSection from '../NotesSection'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="container-fluid">
      <div className="row mx-md-n5">
        <div className="col">
          <div className="p-3 px-md-5 border bg-light text-muted" >G Notes</div>
        </div>
      </div>
      <div className="row ">
        <div className="col-4 border-right pl-0 pr-0"><NotesSection /></div>
        <div className="col-8" ><InputSection /></div>
      </div>
        <Link className="" to="/login">Logout</Link>
    </div>
  )
}

export default Home;
