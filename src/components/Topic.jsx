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
    }

    // addSection(){
    //     this.state.sections.push(this.state.sectionName)
    //     this.updateSections()
    // }
    addSection(){
        this.state.section.name = this.state.sectionName
        this.state.sections.push(this.state.section)
       this.updateSections() 
    //    console.log(this.state.section.id)
    }



    updateSections(){
        this.setState({
            sections: this.state.sections
        })
        this.setState({
            section: {
                id: +this.state.section.id + 1
            }
        })
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