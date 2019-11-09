import React from 'react'

export default class Project extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div className="project">

                <p>Project.jsx</p>

                <div className="project-buttons">
                    <button>edit</button>
                    <button>X</button>
                </div>

            </div>
        )
    }
}