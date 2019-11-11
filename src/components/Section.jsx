import React from 'react'
import Project from './Project'


export default class Section extends React.Component{
    constructor(){
        super()

        this.state = {
            projects : [],
            project: {
                id: 0, 
                name: ''
            },
            projectName: 'new project'
        }
    }

    addProject(){
        const {projects, project, projectName} = this.state
        project.name = projectName
        projects.push(project)
        this.getProjects()
        this.setState({
            project: {
                id: +project.id + 1
            }
        })
    }

    getProjects(){
        this.setState({
            projects: this.state.projects
        })
    }

    render(){
        const {section} = this.props
        return(
            <section>

            <div className="section-name">
        <h3>{section.name} {section.id}</h3>
            <div className="project-buttons">
                    <button>edit</button>
                    
                    <button
                    onClick={()=> this.props.deleteSection(section.id)}
                    >X</button>

                </div>
            </div>

                {/* MAP OUT PROJECTS... */}
                {this.state.projects.map(el=> (

                <Project 
                key = {el.id}
                project = {el}
                />

                ))}

            {/* ADD PROJECT BUTTON */}
            <button
            onClick={()=> this.addProject()}
            >add project</button>
           

            </section>
        )
    }
}