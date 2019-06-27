import React from 'react';
import {Link} from 'react-router-dom';

const Character = ({character}) => {

        const {name, image, id} = character;

        return(
            <div className="card text-center" >
                <img
                    src={image}
                    alt={name}
                    className="round-img"
                    style={{width: '60px'}}
                />
                <h2>{name}</h2>

                <div>
                    <Link 
                        to={`/character/${id}`}
                        className="btn btn-dark btn-sm my-1"
                    >Show more</Link>
                </div>
            </div>
        )
    }

export default Character;
