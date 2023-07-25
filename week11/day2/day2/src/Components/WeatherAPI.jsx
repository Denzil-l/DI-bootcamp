import React, { Component } from "react";

class SunRise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: 'Israel',
            city: 'Tel Aviv'
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
            const data = await response.json()
            this.setState({
                hourSunrise: data.results.sunrise
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        let { country, city, hourSunrise } = this.state
        return (
            <div>
                <h1>In {country}</h1>
                <p>The hour of the sunruise in {city} is {hourSunrise}</p>
            </div>
        )

    }
}

export default SunRise