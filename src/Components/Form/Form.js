import React from 'react';
import useForm from "./useForm";
import validateAddNote from "./validateAddNote";
import ImportData from "../ImportData/ImportData";
import Search from "../Search/search";
import "./Form.css";
import { Note } from "../Note/Note";
import { PopUpForm } from "./popUpForm";

export const Form = () => {

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateAddNote);
    const { importNotes, importNewNote, deleteNote, confirmNote, setConfirmNote } = ImportData(values);
    const { searchTerm, searchResults, search, sortNotes } = Search(importNotes);

    function submit() {
        importNewNote();
    }

    return (
        <div className="mainWindow">
            <div className="firstGrid">
                <Note info={searchResults} delNote={deleteNote} />
            </div>
            <div className="secondGrid">
                <h1>My Notes</h1>
                <input
                    className="search"
                    type="text"
                    placeholder="Search notes"
                    value={searchTerm}
                    onChange={search} />
                <button className="sortButton" onClick={sortNotes}>
                    <strong>
                        Sort notes
                    </strong>
                </button>
                <PopUpForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    errors={errors}
                    values={values}
                    cofirm={confirmNote}
                    setConfirmNote={setConfirmNote} />
            </div>
        </div>
    );
}

