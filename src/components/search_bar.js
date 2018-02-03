import React, {Component}from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchBarChange(term);
    }

    render() {
        return (
            <div className="search_bar">
                <input
                    value={this.state.term}
                    onChange={event => {
                        this.onInputChange(event.target.value)
                    }}/>
            </div>
        );
    }

}

export default SearchBar;