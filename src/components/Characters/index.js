import React from 'react';
import Character from '../Character';

const Characters = ({characters, loading}) => {

    if (loading) return <p>Cargando....</p>
    
    return (
        <div>
            {characters && characters.map(character => (
                <Character key={character.id} character={character} />
            )) }
        </div>
    )
}

export default Characters;