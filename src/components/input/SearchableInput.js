import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';

class SearchableInput extends React.Component {
    handleSearch = (input) => new Promise((resolve, reject) => {

    });

    render() {
        return (
            <React.Fragment>
                <SearchBox onSearch={this.handleSearch} />
            </React.Fragment>
        );
    }
}

SearchableInput.propTypes = {

};

SearchableInput.defaultProps = {

};

export default SearchableInput;