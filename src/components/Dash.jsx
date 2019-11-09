import React from 'react'
import Topic from './Topic'


export default class Dash extends React.Component {
    constructor() {
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
            ],
            topic: {
                id: 0,
                name: 'new topic'
            }
        }
    }


    addTopic() {
        const {topics, topic} = this.state
        topics.push(topic)
        this.getTopics()
    }

    getTopics(){
        this.setState({
            topics: this.state.topics
        })
        console.log(this.state.topics)
    }

    render() {
        return (
            <div className="dash">

                {/* Dash.jsx */}


                {/* MAP OUT TOPICS... */}
                {this.state.topics.map(el => (

                    <Topic
                        key={el.id}
                        topic={el}
                    />

                ))}

                {/* ADD TOPIC BUTTON */}
                <button
                onClick={()=> this.addTopic()}
                >add topic</button>

            </div>
        )
    }
}