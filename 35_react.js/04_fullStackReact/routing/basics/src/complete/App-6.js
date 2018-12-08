import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'; // use router for web, not native

const App = () => (
  <Router>
    <div className='ui text container'>
      <h2 className='ui dividing header'>Which body of water?</h2>
      <ul>
        <li>
          <Link to='/atlantic'>
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
          <Link to='/pacific'>
            <code>/pacific</code>
          </Link>
        </li>
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>
      <hr />
      {/* We'll insert the Route components here */}
      {/*
       given how react router works, this route will render
       given component on top of the /atlantic/ route
       this is the default behaviour
       */}
      <Route path='/atlantic/ocean'
             render={() => (
               <div>
                 {/* use inline function to define component to render */}
                 <h3>Atlantic Ocean — Again!</h3>
                 <p>
                   Also known as "The Pond."
                 </p>
               </div>
             )}/>
      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
      {/* use exact prop to make sure component only renders when path is exact match */}
      {/* We’re using some JSX syntactic sugar here. `exact` = `exact={true}` */}
      {/* In JSX, if the prop is listed but not assigned to a value it defaults the value to true */}
      <Route exact path='/' render={() => (
        <h3>Welcome! Select a body of saline water above.</h3>
      )}/>
    </div>
  </Router>
);

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);

class BlackSea extends React.Component {
  // set initial states
  state = {
    counter: 3
  };

  componentDidMount() {
    // start countdown and update state for render
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    // clear interval
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Black Sea</h3>
        <p>Nothing to sea [sic] here ...</p>
        <p>Redirecting in {this.state.counter}...</p>
        {
          /* check counter and conditional render redirect */
          this.state.counter < 1 ? <Redirect to='/'/> : null
        }
      </div>
    );
  }
}

export default App;
