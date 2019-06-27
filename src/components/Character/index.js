import React, {Component} from 'react';

const Character = ({character}) => {

        const {name, image, url} = character;

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
                    <a 
                        href={url}
                        className="btn btn-dark btn-sm my-1"
                    >Clic Here</a>
                </div>
            </div>
        )
    }

export default Character;
