import React from "react";
import "./Form.css"


export const PopUpForm = props => {

  const { handleSubmit, handleChange, errors, values, cofirm, setConfirmNote } = props;

  var status = "none";
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  function openForm() {
    document.getElementById("addNotePopUp").style.display = "block";
  }

  function closeForm() {
    document.getElementById("addNotePopUp").style.display = "none";
    setConfirmNote("");
  }

  return (
    <div>
      <div className="open-btn">
        <button className="openButton" onClick={openForm}>
          <strong>Add new note</strong>
        </button>
      </div>
      <div id="addNotePopUp">
        <div className="form-popup" id="popupForm">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="divInputTitle">
              <input
                className={`${errors.title ? "errorInputTitle" : "inputTitle"}`}
                name="title" type="text" value={values.title}
                onChange={handleChange}
                placeholder="Title" />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>
            <div className="divInputDate">
              <input
                className={`${errors.date ? "inputError" : "inputDate"}`}
                name="date" type="text"
                value={values.date = today}
                onChange={handleChange} />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>
            <div className="divInputBody">
              <textarea className={`${errors.body ? "errorInputBody" : "inputBody"}`}
                name="body" type="text"
                value={values.body}
                onChange={handleChange}
                placeholder="Body" />
              {errors.body && <span className="error">{errors.body}</span>}
            </div>
            <div className="divInputAuthor">
              <input className={`${errors.author ? "errorInputAuthor" : "inputAuthor"}`}
                name="author"
                type="text"
                value={values.author}
                onChange={handleChange}
                placeholder="Author" />
              {errors.author && <span className="error">{errors.author}</span>}
            </div>
            <div className="divInputStatus">
              <input className={`${errors.status ? "inputError" : "inputStatus"}`}
                name="status"
                type="text"
                value={values.status = status}
                onChange={handleChange} />
              {errors.status && <p className="error">{errors.status}</p>}
            </div>
            <button type="submit" className="submitButton"><strong>Add note</strong></button>
            <button type="button" className="cancelButton" onClick={closeForm}><strong>Close</strong></button>
            {cofirm && <p className="confirm">{cofirm}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}