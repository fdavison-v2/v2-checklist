import React from 'react'
import Section from './Section'

export default class Topic extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [],
            title: ''
        }
    }
    render() {
        const {topic} = this.props
        return (
            <div className="topic">

                {/* Topic.jsx */}
                <h2>{topic.name}</h2>
                <Section />

            </div>
        )
    }
}