import React from 'react'
import Section from './Section'

export default class Topic extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: ['afternoon projects', 'mini projects'],
            title: ''
        }
    }
    render() {
        const {topic} = this.props
        return (
            <div className="topic">

                {/* Topic.jsx */}
                <h2>{topic.name}</h2>
                

                {/* MAP OUT SECTIONS..? */}
                {this.state.sections.map(el => (
                    
                    <Section 
                    key={el.id}
                    section={el}
                    />

                ))}

            </div>
        )
    }
}