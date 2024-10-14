import { Component } from "react";
import "./index.css";

class App extends Component {
  state = { isSubscribe: true };

  onsubscribe = () => {
    this.setState((prevState) => ({ isSubscribe: !prevState.isSubscribe }));
  };

  onButtonText = () => {
    const { isSubscribe } = this.state;
    return isSubscribe ? "Subscribed" : "Subscribe";
  };

  render() {
    const buttonText = this.onButtonText();
    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        <button className="button" onClick={this.onsubscribe}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
