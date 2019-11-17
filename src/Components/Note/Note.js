import React from "react";
import "./Note.css";

export const Note = props => {

    const { info, delNote } = props;

    return (<div className="container">

        {info.map((item, index) => (<p className="note" key={index}>
            <span className="itemTitle">{`${item.title}`}</span>
            <span className="itemDate">{`${item.date}`}</span>
            <span className="itemBody">{`${item.body}`}</span>
            <span className="itemAuthor">{`${item.author}`}</span>
            <button className="deleteButton" onClick={() => delNote(index)}>X</button></p>))}

    </div>)

}