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
            sectionName: 'new section',
            editTopic: false
        }
        this.addSection = this.addSection.bind(this)
        this.deleteSection = this.deleteSection.bind(this)
    }

    addSection() {
        const { section, sections, sectionName } = this.state
        section.name = sectionName
        sections.push(section)
        this.getSections()
        this.setState({
            section: {
                id: +section.id + 1
            }
        })
    }

    getSections() {
        this.setState({
            sections: this.state.sections
        })
    }

    deleteSection(id) {
        const { sections } = this.state
        let index = sections.findIndex(section => section.id === +id)
        sections.splice(index, 1)
        this.getSections()
    }

    handleChange(e) {
        this.setState({
            sectionName: e.target.value
        })
    }

    // handleChange2(e){
    //     this.setState({
    //         editName: e.target.value
    //     })
    //     // console.log(e.target.value)
    // }

    toggleEdit(){
        this.setState({
            editTopic: !this.state.editTopic
        })
    }

    doneButton(){
        this.toggleEdit()
        this.props.editTopic()
    }

    render() {
        const { topic, deleteTopic} = this.props
        const {editTopic} = this.state
        return (
            <div className="topic">


                <div className="topic-buttons">
                    <h2>{topic.name} {topic.id}</h2>
                    
                    
                    <button
                    onClick={()=> this.toggleEdit()}
                    >edit</button>



                    {/* EDIT TOGGLE */}
                    {editTopic ? 

                    <div className="topic-edit">

                    <input 
                    onChange={(e)=> this.props.changeName(e.target.value)}
                    type="text" />

                    <button
                    onClick={()=> this.doneButton()}
                    >done</button>

                    </div> : null}


                    <button
                        onClick={() => deleteTopic(topic.id)}
                    >X</button>

                </div>


                {/* MAP OUT SECTIONS.. */}
                {this.state.sections.map(el => (

                    <Section
                        key={el.id}
                        section={el}
                        addSection={this.addSection}
                        deleteSection={this.deleteSection}
                    />

                ))}


                {/* SECTION NAME INPUT */}
                <input
                    onChange={(e) => this.handleChange(e)}
                    type="text" />



                {/* ADD SECTION BUTTON */}
                <button
                    onClick={() => this.addSection()}
                >add section</button>


            </div>
        )
    }
}