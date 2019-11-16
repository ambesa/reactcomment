import React from "react";
// importing react dom
//creating function name from 
// FUNCTION NAMED FORM RETURNING THREE ARGUMENTS
// Q, HANDLEINPUT CHANGE AND HANDLE FORM SUBMIT

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    // returning class from 
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
        // class name form control
          className="form-control"
          //
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}
// exporting the form file 

export default Form;
