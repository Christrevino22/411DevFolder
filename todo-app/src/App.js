import React, {Component} from 'react';
import './App.css';

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

  componentDidUpdate(){
  console.log("inside CMD", this.state.isClicked)    
  console.log(this.state.text)
  console.log(this.state.todos)
  };
  
  
  
  handleClick = () => {
    // this.setState({isClicked: !this.state.isClicked});
    this.setState({
      todos: [...this.state.todos, this.state.text],
    });
//clear out the text  event.target.value

  };

  handleChange(event) {
    console.log(event.target.value);
    this.setState({text: event.target.value});
  }
//hint function called handle remove and look into the slice method and find index!!!!????

  render() {
    return (
      <div className = 'App'>
    {/**MAP OVer and Show the todos */}
        <h1>Below is my click me button please enjoy the button!!!!</h1>
      <input type = {this.state} onChange={this.handleChange}/>
        <button onClick ={this.handleClick}>Submit Task</button>
        <ul>
           <li> {this.state.todos} </li>
        
        
        </ul>
      </div>
      );
    }
  }




    export default App;
