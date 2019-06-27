import React from 'react';

class Search extends React.Component {
    state={
        text:'',
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchCharacter(this.state.text)
        this.setState({
            text:''
        })

    }

    render(){
        const {text} = this.state
        const {showClear, clearCharacters} = this.props;
        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search...."
                        value={text}
                        onChange={this.onChange}
                    />

                    <button
                        className="btn btn-dark btn-block"
                    >Search</button>

                </form>

                {
                    showClear && <button
                    onClick={clearCharacters}
                    className="btn btn-ligth btn-block"
                >Clear</button>
                    
                }

                 
            </div>
        )
    }
}

export default Search;