import PropTypes from 'prop-types'

function ProjectList({projects}) {
    return (
        <div className='container-sm d-flex flex-column flex-wrap align-items-center' style={{height: '1600px'}}>
            {projects.map((el, index) => <img key={index} src={el.img} className="img-thumbnail p-2" alt="..." />)}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
}

export default ProjectList