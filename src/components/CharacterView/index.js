import React from 'react';

class CharacterView extends React.Component{
    componentDidMount(){
        this.props.getCharacter(this.props.match.params.id)
    }
    render(){

        const {character:{name, image, species, status, gender, episode}, loading} = this.props

        if(loading) return <p>Cargando...</p>

        return(
            <div className="card grid-2">
          <div className="all-center">
            <img src={image} className="round-img" style={{ width: '150px' }} alt={name} />
            <h2>{name}</h2>
            <p>Specie: {species}</p>
          </div>

          <div>
            <h3>Status: {status}</h3>
            <p>Gender: {gender}</p>

            <div className="badge badge-success">Episodies: {episode ? episode.length : 0}</div>

          </div>

        </div>
        )
    }
}

export default CharacterView;