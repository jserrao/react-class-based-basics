import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

// Styled component
// You'll always just list them at the top like this
// Don't forget to import
const Base = styled.main`
  background-color: lightgray;
  padding: 25px 50px;
  min-height: 50vh;
`

// Data
// I just grabbed this data from the chuck norris joke machine
// http://api.icndb.com/jokes/random/5
// It kinda doesn't matter what data you use, just try stuff out
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

// Notice you can log stuff before you get into React
// At this point your code is still outside of React
console.log(jokesArray)

// Component
/**
 * I want you to notice a couple things.
 * App extends Component - but what does that mean?
 * Component is React's idea of a component, the model for a component
 * As such, you have to import from the React library (check line 1)
 * When you make your 'App' class you are extending React's model
 * This is called inheritance, so your custom App class gets React's component
 * 
 * So what 'ideas' do you get with Component?
 * You implicitly get the idea of props and state
 * Props are ways to pass data between components
 * State is an object to house data you want to manipulate
 * At a high-level, that's what you need to know to get going
 */
class App extends Component {
  /* This constructor is like any other class-constructor in JS
   * It brings the idea of the component from React into this class
   */
  constructor(props) {
    // Super instantiates the instance of this into the class
    // And remember this just points at the class name
    // This is a proxy for App
    // Also note that super accepts the props information
    // This allows it to have access to props passed from other components
    super(props)

    // The state object builds off of the custom class' React component model
    // This is available to all React components, but you have to set it up manually?
    // This makes sense if you think about it - you have to put the data in there
    // You can put whatever data types you need, but it's explicitly done
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
    // This allows you methods to use the same scope
    this.activate = this.activate.bind(this)
    this.modifyJokes = this.modifyJokes.bind(this)
  }

  // Super basic custom method, but it works.
  activate() {
    console.log("Please work!")
  }
  
  modifyJokes() {
    // Array methods???
    /**
     * .filter() 
     * This one allows you to take an array and filter it down by it's children's properties
     * In this case, we're taking our array of jokes and looking for ones with IDs lower than 200
     * It creates a new array into smallJokes (only three jokes now)
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

        <button onClick={ this.modifyJokes }> Trigger modifyJokes() please! </button>
        <button onClick={ this.activate }> Trigger activate() please! </button>
      </>
    )
  }
}

export default App;

