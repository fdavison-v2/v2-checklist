import React from 'react'
import Section from './Section'

export default class Topic extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [],
            section: {
                id: 0,
                name: ''
            },
            sectionName: 'new section'
        }
        this.addSection = this.addSection.bind(this)
        this.deleteSection = this.deleteSection.bind(this)
    }

    addSection(){
        const {section, sections, sectionName} = this.state
        section.name = sectionName
        sections.push(section)
       this.getSections() 
       this.setState({
           section: {
               id: +this.state.section.id + 1
           }
        })
    }

    
    getSections(){
        this.setState({
            sections: this.state.sections
        })
    }
    
    deleteSection(id){
        const {sections} = this.state
        let index = sections.findIndex(section => section.id === +id)
        sections.splice(index, 1)
        this.getSections()
    }

    handleChange(e){
        this.setState({
            sectionName: e.target.value
        })
    }

    render() {
        const {topic} = this.props
        return (
            <div className="topic">

                {/* Topic.jsx */}
                <h2>{topic.name}</h2>
                

                {/* MAP OUT SECTIONS.. */}
                {this.state.sections.map(el => (
                    
                    <Section 
                    key={el.id}
                    section={el}
                    addSection = {this.addSection}
                    deleteSection ={this.deleteSection}
                    />

                ))}


                {/* SECTION NAME INPUT */}
                 <input 
                 onChange={(e)=>this.handleChange(e)}
                 type="text"/>



                 {/* ADD SECTION BUTTON */}
            <button
            onClick={()=>this.addSection()}
            >add section</button>


            </div>
        )
    }
}