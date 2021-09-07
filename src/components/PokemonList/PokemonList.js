import React from 'react'
import Pokemon from '../Pokemon/Pokemon';

import "./PokemonList.css";


export default function PokemonList({listPoke}) {

    return (
        <div className="container"> 
            {listPoke.map(poke => (
                <Pokemon key={poke} name={poke.name} url={poke.url}/>
            ))
            }
        </div>
    )
}
