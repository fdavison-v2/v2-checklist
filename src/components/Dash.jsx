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
            editTopicName: 'new topic'
        }
        this.deleteTopic = this.deleteTopic.bind(this)
        this.editTopic = this.editTopic.bind(this)
        this.changeName = this.changeName.bind(this)
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
        const {topics, editTopicName} = this.state
        // this.changeName()
        // console.log(editTopicName)
        //find right entry
        let index = topics.findIndex(topic => topic.id === +id)
        //splice out original, place in new
        topics.splice(index, 1, {name: editTopicName, id: id})
        //update topics array
        this.setState({
            topics: topics
        })
        //display new topics array
        this.getTopics()
    }

    changeName(e){
        this.setState({
            editTopicName: e
        })
        console.log(e)
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
                        changeName = {this.changeName}
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