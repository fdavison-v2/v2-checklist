import React from 'react'
import Section from './Section'

export default class Topic extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: ['afternoon projects', 'mini projects'],
            title: ''
        }
        this.addSection = this.addSection.bind(this)
    }

    addSection(){
        this.state.sections.push('fred')
        this.updateSections()
    }

    updateSections(){
        this.setState({
            sections: this.state.sections
        })
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
                    addSection = {this.addSection}
                    />

                ))}

                

            </div>
        )
    }
}