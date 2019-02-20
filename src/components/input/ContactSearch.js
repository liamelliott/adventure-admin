import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';

class ContactSearch extends React.Component {
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

ContactSearch.propTypes = {

};

ContactSearch.defaultProps = {

};

export default ContactSearch;