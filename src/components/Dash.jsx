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
            topicName: 'new topic',
            editTopicName: 'fred'
        }
        this.deleteTopic = this.deleteTopic.bind(this)
        this.editTopic = this.editTopic.bind(this)
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
    }

    deleteTopic(id){
        const {topics} = this.state
        let index = topics.findIndex(topic => topic.id === +id)
        topics.splice(index, 1)
        this.getTopics()
    }
    
    editTopic(id){
        console.log(id)
        const {topics, topic, editTopicName} = this.state
        let index = topics.findIndex(topic => topic.id === +id)
        topics.splice(index, 1, {name: editTopicName, id: id})
        console.log(editTopicName)
        this.setState({
            topics: topics
        })
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
                        editTopic = {this.editTopic}
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