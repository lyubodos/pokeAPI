import React from 'react'
import Pokemon from './Pokemon'


export default function PokemonList({listPoke}) {

    return (
        <div>
            {listPoke.map(poke => (
                <Pokemon key={poke} name={poke.name} url={poke.url}/>
            ))
            }
        </div>
    )
}
