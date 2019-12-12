import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

// Styled component
const Base = styled.main`
  background-color: lightgray;
  padding: 25px 50px;
  min-height: 50vh;
`

// Data
const jokesArray = [
  {
      "id": 164,
      "joke": "Chuck Norris once sued Burger King after they refused to put razor wire in his Whopper Jr, insisting that that actually is &quot;his&quot; way.",
      "categories": []
  },
  {
      "id": 462,
      "joke": "Project managers never ask Chuck Norris for estimations... ever.",
      "categories": [
          "nerdy"
      ]
  },
  {
      "id": 192,
      "joke": "There is endless debate about the existence of the human soul. Well it does exist and Chuck Norris finds it delicious.",
      "categories": []
  },
  {
      "id": 66,
      "joke": "Chuck Norris can't finish a &quot;color by numbers&quot; because his markers are filled with the blood of his victims. Unfortunately, all blood is dark red.",
      "categories": []
  },
  {
      "id": 586,
      "joke": "Chuck Norris already went to Moon and Mars, that's why there are no signs of life.",
      "categories": []
  }
]

console.log(jokesArray)

// Component
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokes: jokesArray,
      filteredJokes: [
        {
          theBestJoke: "How many programmers does it take to screw in a light bulb?",
          theBestAnswer: "I'll have to see the documentation, thanks"
        }
      ]
    }

    // You always have to bind this to custom methods, so React can share the data with it
    this.activate = this.activate.bind(this)
    this.modifyJokes = this.modifyJokes.bind(this)
  }

  activate() {
    console.log("Please work!")
  }
  
  modifyJokes() {
    // Array methods???
    /**
     * .filter() 
     */
    const smallJokes = this.state.jokes.filter( (jokeObj) => {
      return jokeObj.id < 200
    })
    console.log(smallJokes)

    // In some situations, setState can take a function instead of an obj
    // The function is implicitly passed the previous values in the state obj
    // You can then use those values to rewrite the state object
    this.setState( (prevState) => ({
      filteredJokes: [ ...prevState.filteredJokes, smallJokes ]
    })
    ) 

    // Remember that .map is an abstraction of a for loop, so these are equivalent
    // for( let i=0; i < this.state.jokes.length; i++ ) {
    //   console.log(this.state.jokes[i].joke)
    // }
  }

  // In your render, you put JSX (template language) into the return
  // Wrap your JSX in a SINGLE object container, which is called a React Fragment
  // Any time you want a programmatic element in JSX, use some curlys {}
  render() {
    let moreMadness = "Can this happen? OMG?!?"

    return(
      <>
        <h1>Igor is right!</h1>
        <p>Kinda like HTML...but with a twist.</p>
        <p>{ moreMadness }</p>

        <h2>Display all the jokes</h2>
        {/* I know I want something programmatic, so I need a set of curly braces */}
        {/* I know I need to access my state object, jokes part of it */}
        {/* .map over my array, which needs an argument */}
        {/* in a .map, my first argument is the active part of my array being iterated over */}
        {/* the second argument (optional) in a .map its the count */}
                
        { this.state.jokes.map( (jokeObj, i) => {
          return (
            <p>Joke #{i + 1} - { jokeObj.joke }</p>
          )
        })}

        <button onClick={ this.modifyJokes }> Trigger modifyJokes please! </button>
      </>
    )
  }
}

export default App;

