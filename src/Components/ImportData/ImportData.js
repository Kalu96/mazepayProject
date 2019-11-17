import { useState } from "react";
import fetchedData from "./data.json";

const ImportData = (values) => {
    const [importNotes, setImportNotes] = useState(fetchedData);
    const [confirmNote, setConfirmNote] = useState("");

    const importNewNote = () => {
        setImportNotes(importNotes => [...importNotes, values]);
        setConfirmNote("The note is successfully added!");
    }

    const deleteNote = (noteTitle) => {
        var array = [...importNotes];
        if (noteTitle !== -1) {
            array.splice(noteTitle, 1);
            setImportNotes(array);
        }
    }

    return {
        importNotes,
        importNewNote,
        deleteNote,
        confirmNote,
        setConfirmNote,
    }
}
export default ImportData;