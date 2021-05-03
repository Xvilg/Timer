import React from "react";
import ReactDOM from "react-dom";
import TimerInput from './TimerInput'
import Timer from './Timer'
import StartButton from './StartButton'

import './style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '00',
      isClicked : true,
      disabled: true,
      intervalID: 0
    }
    /*this.secondsRemaining;
    this.intervalHandle;*/
   
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);

    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);

    
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0"+ this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }

    

    this.secondsRemaining--
  }


  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value * 60;
    if (this.state.seconds > 0) {
    this.secondsRemaining = time + this.state.seconds;   
    } else {
      this.secondsRemaining = time * 60;
    } 
  } 
  

  
  onPlayStopTimer() {
    clearInterval(this.intervalHandle)
    console.log(this.state.seconds)
  }

  onResetTimer() {
    this.setState({
     value: "00",
     seconds: "00"
    })
  }

 
  render() {
    
      return (
        <div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <TimerInput  handleChange={this.handleChange} />
              <Timer value={this.state.value} seconds={this.state.seconds} />
              <StartButton handleChange={this.handleChange} startCountDown={this.startCountDown}             
              value={this.state.value}
              onPlayStopTimer={this.onPlayStopTimer} 
              onResetTimer={this.onResetTimer}
              />
            </div>
          </div>
        </div>
      );
    }
  }


export default App;
