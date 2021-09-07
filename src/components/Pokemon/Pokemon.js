import React from 'react'
import "./Pokemon.css";



export default function Pokemon({name, url}) {
    return (
        <div className="container-box">
            <h2>{name}</h2>
            <a href={url}>{url}</a>
        </div>
    )
}
