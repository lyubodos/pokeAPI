import React from 'react'

export default function Pokemon({name, url}) {
    return (
        <div>
            <h2>{name}</h2>
            <a href={url}>{url}</a>
        </div>
    )
}
