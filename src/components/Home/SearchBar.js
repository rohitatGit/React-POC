import React from 'react';

class SearchBar extends React.Component {
    state = { query: 'Search videos' }
    onInputChange = (event)=>{
        this.setState({ query: event.target.value });
    }
    
    onFormSubmit =(e)=> {
        e.preventDefault();
        this.props.onFormSubmit(this.state.query)
    }

    render() {
        return(
            <div className="search_header">
                <form onSubmit={this.onFormSubmit}>
                    <label>Search</label>
                    <input type="text" className="form-control"
                        value={this.state.query}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;