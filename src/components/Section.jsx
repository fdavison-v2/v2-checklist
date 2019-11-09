import React from 'react'
import Project from './Project'


export default class Section extends React.Component{
    constructor(){
        super()

        this.state = {
            projects : []
        }
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

                <Project />

                ))}


           

            </section>
        )
    }
}