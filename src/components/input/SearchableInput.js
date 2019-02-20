import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';

class SearchableInput extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SearchBox />
            </React.Fragment>
        );
    }
}

SearchableInput.propTypes = {

};

SearchableInput.defaultProps = {

};

export default SearchableInput;