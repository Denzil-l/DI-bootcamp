import React, { Component } from "react";

class vote extends Component {
    constructor() {
        super()
        this.state = {
            languages: [
                { name: "Php", votes: 0 },
                { name: "Python", votes: 0 },
                { name: "JavaSript", votes: 0 },
                { name: "Java", votes: 0 }
            ],
            name: '',
            arr: []
        }
    }
    vote = (lang) => {
        const { languages } = this.state
        lang.votes++
        console.log(languages)
    }
    render() {
        const { languages } = this.state
        return (
            <div>

                {
                    languages.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.name}
                                {item.votes}
                                <button onClick={() => vote(item)}>Add</button>
                            </div>
                        )
                    })
                }

            </div>

        )
    }
}

export default vote