import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

function Toolbar ({filters, selected, onSelectFilter}) {
    const handleEvent = event => {
        onSelectFilter(event)
    }

    return (
        <div className="btn-group" role="group">
            {filters.map(el => <button key={el} className={classNames('btn', 'btn-outline-secondary', el === selected ? 'active' : null)} onClick={handleEvent}>{el}</button>)}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array, 
    selected: PropTypes.string, 
    onSelectFilter: PropTypes.func
}

export default Toolbar;