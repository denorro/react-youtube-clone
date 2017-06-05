/**
 * Created by Denorro Stallworth on 5/27/2017.
 */
import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.submit = this.submitTerm.bind(this);
    }

    render() {
        return (
            <div className="search-bar">
                <form className="form">
                    <div className="form-group">
                        <input className="form-control" placeholder="Search..."
                               onChange={ event => this.onInputChange(event.target.value) }
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-success btn-block" onClick={this.submit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    };

    onInputChange(term){
        this.setState({ term: term});
    }

    submitTerm(){
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;