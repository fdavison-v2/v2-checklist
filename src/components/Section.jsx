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
        const {section, addSection} = this.props
        return(
            <section>

            <h3>{section}</h3>
                <Project />


            {/* ADD SECTION BUTTON */}
            <button
            onClick={()=>addSection()}
            >add section</button>

            </section>
        )
    }
}