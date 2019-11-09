import React from 'react'
import Topic from './Topic'


export default class Dash extends React.Component{
    constructor(){
        super()

        this.state = {
            topics: [{
                id: 1,
                name: 'javascript'
            },
            {
                id: 2,
                name: 'react'
            },
            {
                id: 3,
                name: 'node'
            },
            ]
        }
    }
    render(){
        return(
            <div className="dash">

                {/* Dash.jsx */}


                {/* MAP OUT TOPICS... */}

                {this.state.topics.map(el=> (
                    
                    <Topic 
                    key = {el.id}
                    topic = {el}
                    />

                ))}

            </div>
        )
    }
}