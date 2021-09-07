import React from 'react';

import "./Pagination.css";


export default function Pagination({
    goToNext,
    goToPrev
}) {
    return (
        <div className="btn-container">

            {goToPrev && <button className="btn" onClick={goToPrev}>Previous</button>}
            <button button className="btn" onClick={goToNext}>Next</button>
           
        </div>
    )
}
