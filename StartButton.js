import React from 'react'

class StartButton extends React.Component {
  constructor() {
    super();

    this.state = {
      timerSecond: 0,
      intervalID: false, 
      isSession: true,
      disabled: true
  };



  this.resetTimer = this.resetTimer.bind(this);
  this.stopTimer = this.stopTimer.bind(this);
  

  } 

  stopTimer() {
    clearInterval(this.state.intervalID);
    this.props.onPlayStopTimer(false);
}  

  resetTimer() {
    this.stopTimer();
    this.props.onResetTimer();   
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true
    })
  }

  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button className="btn btn-lg btn-success"        
        onClick={this.props.startCountDown}
      
       >Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>

    );
  }
}

export default StartButton;