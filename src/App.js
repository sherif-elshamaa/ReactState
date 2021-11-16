import React from "react";
import img from "./imageInPublic.png";

class App extends React.Component {
  state = {
    fullName: "Sherif Elshamaa",
    bio: "bio placeholder",
    imgSrc: img,
    profession: "fullstack developer",
    show: true,
    date: new Date(),
  };

  handletoggle = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    this.timerID = setTimeout(() => this.tick(),0);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button
          onClick={this.handletoggle}
          style={{ width: "100px", height: "50px", backgroundColor: "red" }}
        >
          Click me
        </button>
        {this.state.show ? (
          <header className="App-header">
            <h3>{this.state.fullName}</h3>
            <p>{this.state.bio}</p>
            <img src={this.state.imgSrc} />
            <br />
            <p>{this.state.profession}</p>
          </header>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
