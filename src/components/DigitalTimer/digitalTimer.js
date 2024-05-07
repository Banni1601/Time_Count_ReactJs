import "./digitalTimer.css";
import { Component } from "react";

class Digitaltimer extends Component {
  constructor(props) {
    super(props);
    this.state = { Minute: 25, Seconds: 60, run: true };
  }
  increasesTheTime = () => {
    const { Minute, Seconds, run } = this.state;
    this.setState({ Minute: Minute + 1, Seconds: 60 });
    if (!run) {
      this.setState({ run: true });
      this.componentDidMount();
    }
  };
  decreasesTheTime = () => {
    const { Minute, Seconds, run } = this.state;
    this.setState({ Minute: Minute - 1, Seconds: 60 });
    if (!run) {
      this.setState({ run: true });
      this.componentDidMount();
    }
  };

  componentDidMount() {
    this.secondsID = setInterval(this.secondsChanging, 1000);
  }

  secondsChanging = () => {
    const { Minute, Seconds } = this.state;
    if (Seconds !== 0) {
      this.setState({ Seconds: Seconds - 1 });
    } else if (Seconds === 0) {
      this.setState({ Minute: Minute - 1, Seconds: 60 });
    }
  };
  RestartTheTime = () => {
    const { Minute, Seconds, run } = this.state;
    this.setState({ Minute: 25, Seconds: 60 });
    if (!run) {
      this.setState({ run: true });
      this.componentDidMount();
    }
  };

  componentWillUnmount = () => {
    //this.toggle();
    clearInterval(this.secondsID);
  };
  toggle = () => {
    const { run } = this.state;
    if (run) {
      clearInterval(this.secondsID);
      this.setState({ run: false });
    } else {
      this.componentDidMount();
      this.setState({ run: true });
    }
  };

  render() {
    const { Minute, Seconds } = this.state;

    return (
      <div className="App">
        <p>
          time : {Minute}:{Seconds}
        </p>
        <div>
          <button onClick={this.decreasesTheTime}>-</button>
          <p>change {Minute}</p>
          <button onClick={this.increasesTheTime} type="button">
            +
          </button>
          <button onClick={this.RestartTheTime}>
            Restart the Time From Beging
          </button>
          <button onClick={this.toggle}>Play/Stop</button>
        </div>
      </div>
    );
  }
}

export default Digitaltimer;
