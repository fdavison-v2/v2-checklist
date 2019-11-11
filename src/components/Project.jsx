import React from 'react'

export default class Project extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }
    render() {
        const {project} = this.props
        return (
            <div className="project">

                <p>{project.name} {project.id}</p>

                <div className="project-buttons">
                    <button>edit</button>
                    <button
                     onClick={()=> this.props.deleteProject(project.id)}
                     >X</button>
                </div>

            </div>
        )
    }
}