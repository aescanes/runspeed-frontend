import React from 'react';
import axios from 'axios';
import './SpeedConverted.css';

class SpeedConverted extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyUpPace = this.handleKeyUpPace.bind(this);
        this.handleKeyUpSpeed = this.handleKeyUpSpeed.bind(this);
    }

    handleKeyUpPace(event) {
        var pace = event.target.value
        if (pace) {
            axios
                .get('http://127.0.0.1:5000/api/v1.0/pace-to-speed/' + pace)
                .then(response => {
                    if (response.data.speed) {
                        document.getElementById('speed_from_pace').textContent = response.data.speed + ' km/h'
                        document.getElementById('error_speed_from_pace').textContent = ''
                    } else if (response.data.error) {
                        document.getElementById('error_speed_from_pace').textContent = response.data.error
                        document.getElementById('speed_from_pace').textContent = 'Speed'
                    }
                })
                .catch(e => console.log(e))
        } else {
            document.getElementById('error_speed_from_pace').textContent = ''
            document.getElementById('speed_from_pace').textContent = 'Speed'
        }
    }

    handleKeyUpSpeed(event) {
        var speed = event.target.value
        if (speed) {
            axios
                .get('http://127.0.0.1:5000/api/v1.0/speed-to-pace/' + speed)
                .then(response => {
                    if (response.data.minutes) {
                        document.getElementById('pace_from_speed').textContent = response.data.minutes + ':' + response.data.seconds
                    } else if (response.data.error) {
                        document.getElementById('error_pace_from_speed').textContent = response.data.error
                        document.getElementById('pace_from_speed').textContent = 'Pace'
                    }
                })
                .catch(e => console.log(e))
        } else {
            document.getElementById('error_pace_from_speed').textContent = ''
            document.getElementById('pace_from_speed').textContent = 'Speed'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.msg}</h1>
                <p className="subtitles">
                    Get Speed (km/h) from Pace (minutes:seconds per hour): <br />
                    <span id="error_speed_from_pace" className="error" />
                </p>
                <p className="numbers"><input id="pace" onKeyUp={this.handleKeyUpPace} /><span>m:s ➔&nbsp;</span><span id="speed_from_pace">Speed</span></p>
                <p className="subtitles">
                    Get Pace (minutes:seconds per hour) from Speed (km/h) <br />
                    <span id="error_pace_from_speed" className="error" />
                </p>
                <p className="numbers"><input id="speed" onKeyUp={this.handleKeyUpSpeed} /><span>km/h ➔&nbsp;</span><span id="pace_from_speed">Pace</span></p>
            </div>
        );
    }
}

export default SpeedConverted;