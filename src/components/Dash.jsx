import React from 'react'
import Topic from './Topic'


export default class Dash extends React.Component {
    constructor() {
        super()

        this.state = {
            topics: [],
            topic: {
                id: 0,
                name: ''
            },
            topicName: 'new topic'
        }
        this.deleteTopic = this.deleteTopic.bind(this)
    }


    addTopic() {
        const {topics, topic, topicName} = this.state
        topic.name = topicName
        topics.push(topic)
        this.getTopics()
        this.setState({
            topic: {
                id: topic.id + 1
            }
        })
    }

    getTopics(){
        this.setState({
            topics: this.state.topics
        })
        console.log(this.state.topics)
    }

    deleteTopic(id){
        const {topics} = this.state
        let index = topics.findIndex(topic => topic.id === +id)
        topics.splice(index, 1)
        this.getTopics()
    }

    handleChange(e){
        this.setState({
            topicName: e.target.value
        })
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
                        deleteTopic = {this.deleteTopic}
                    />

                ))}


                {/* INPUT */}
                <input 
                onChange={(e)=> this.handleChange(e)}
                type="text"/>

                {/* ADD TOPIC BUTTON */}
                <button
                onClick={()=> this.addTopic()}
                >add topic</button>

            </div>
        )
    }
}