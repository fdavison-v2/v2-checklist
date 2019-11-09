import React from 'react'
import Section from './Section'

export default class Topic extends React.Component{
    constructor(){
        super()

        this.state = {
            sections : [],
            title: ''
        }
    }
    render(){
        return(
            <div className="topic">

            Topic.jsx
            <Section />

            </div>
        )
    }
}