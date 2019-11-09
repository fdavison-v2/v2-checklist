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
        return(
            <section>

                Section.jsx
                <Project />

            </section>
        )
    }
}