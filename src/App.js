import React, { Component } from 'react';
//import FirstComponent from './firstComponent';
import './App.css';
import FirstComponent from './firstComponent';

class App extends Component {
//so usually how it works is you make a component and push it or IMPORT it from origin.
//this i would say is the main point at this stage or at least what renders on page
//refer back to developer tools to under stand. Components are like div's in HTML
//getting a way better understanding of React!!!! 

//below is where i will begin making the state process
//don't really understand this process yet

constructor (props) {
  super(props) 
  this.state = {
    input: '',
    items: []
  }
}

// toggle = () => {
//   this.setState({isOn: !this.state.isOn})
// }

inputUpdate = event => {
  this.setState({input: event.target.value})
  //remember in the morning that value it's targeting is line 43, then on the onChange I guess it's calling the inputUpdate function
  //come back to this in the mornin
  // 12/29/2020 **** Didn't get back to it too much shit going on!!!  SMh

}

formSubmit = event =>{ 
  event.preventDefault()
  console.log('THIS IS STATE', this.state.items)
  this.setState({
    items: [...this.state.items, this.state.input],
    input: ''
  })
}

  render() {

    // console.log('***This is state***', this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Understanding the layers of react or atleast I think I am!? !! ***The is from the root***!!!
        </p>
          <form onSubmit = {this.formSubmit}>
            <input value = {this.state.input} onChange = {this.inputUpdate}/>
              <button>Submit</button>
          </form>
              <ul>{this.state.items.map((item, index) => {
                return <li key = {index}>{item}</li>
              })}
              </ul>
         <FirstComponent items: {this.state.items} />
      </header>
    </div>
    );
  }
}



export default App;
