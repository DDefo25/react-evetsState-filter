import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filter: 'All'}
        this.filters = new Set().add('All')
    }

    handleClick = event => {
        this.setState({filter: event.target.innerHTML})
    }
    
    render() {
        const {data} = this.props;
        const {filter} = this.state;
        data.forEach(el => this.filters.add(el.category))
        
        const dataFiltered = data.filter(el => {
            if (filter === 'All') {
                return el
            } else {
                return el.category === filter
            }
        })

        return (
            <div className='container'>
                <Toolbar
                    filters={[...this.filters]}
                    selected={filter}
                    onSelectFilter={this.handleClick} />
                <ProjectList projects={dataFiltered} />
            </div>
        )
    }
}

export default Portfolio