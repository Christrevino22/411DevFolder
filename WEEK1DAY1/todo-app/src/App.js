import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      text: "",
      todos: [],
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    console.log("inside CMD or component did update", this.state.isClicked);
  }

  handleClick = () => {
    // this.setState({isClicked: !this.state.isClicked});
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: "",
    });
    //clear out the text  event.target.value
    // got the text to clear out by just swithcing the type to value on the input
    // clay showed us this in the prework video, I made it so that way when i submit i changes back to it normal state if i said that right
    //still get really lost, I guess matt is right i gotta get alot more hands on with the stuff
    //a little harder but also not as hArd as i though it was gonna be
  };

  handleChange(event) {
    console.log("****This is state****", this.state);
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
  //hint function called handle remove and look into the slice method and find index!!!!????
  handleRemove() {
    this.setState({})
  }

  render() {
    return (
      <div className="App">
        {/**MAP OVer and Show the todos, this has been done already */}
        <h1>Below is my click me button please enjoy the button!!!!</h1>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit Task</button>
        
          <ul> {this.state.todos.map((item,index) => {
            return <li key= {index}>{item}</li>
          })} </ul>
      
      </div>
    );
  }
}

export default App;
