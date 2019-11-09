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

            <h3>{section}</h3>
                <Project />

            </section>
        )
    }
}