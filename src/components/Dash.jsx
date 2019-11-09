import React from 'react'
import Topic from './Topic'


export default class Dash extends React.Component{
    constructor(){
        super()

        this.state = {
            topics: []
        }
    }
    render(){
        return(
            <div className="dash">

                Dash.jsx
                <Topic />

            </div>
        )
    }
}