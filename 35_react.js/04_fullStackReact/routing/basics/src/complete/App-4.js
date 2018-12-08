import React from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

class Router extends React.Component {
  // In order to expose context to children, we must specify the type of each context
  // React passes the information down automatically and any component in the subtree
  // can access it by defining contextTypes.
  //
  // If contextTypes is not defined, then context will be an empty object
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.history = createHistory(); // create history utils helper
    this.history.listen(() => this.forceUpdate()); // subscribe to history updates to re-render entire component
  }

  // expose certain class members to child components
  getChildContext() {
    return {
      history: this.history,
      location: window.location,
    };
  }

  render() {
    return this.props.children;
  }
}

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
      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
    </div>
  </Router>
);

const Route = ({path, component: ComponentPassedViaProp}, {location}) => {
  const pathname = location.pathname;

  if (!path || !path.length) {
    return null;
  }

  // match path and return component
  if (pathname.toLowerCase() === path.toLowerCase()) {
    // normal render without JSX with a passed in component
    // this is recommended due to its easy to identify as a dynamic component
    // return React.createElement(component);

    // alternative way to render passed in component, make sure component name is capitalized
    return <ComponentPassedViaProp/>;
  }

  return null;
};
// define static members like this for stateless function components
// need to add this context types to whitelist all required properties form parent context
Route.contextTypes = {
  location: PropTypes.object
};

const Link = ({to, children}, {history}) => (
  <a
    href={to}
    onClick={e => {
      e.preventDefault(); // suppress default link behaviour
      history.push(to); // update history
    }}
  >
    {children}
  </a>
);
// define static members like this for stateless function components
// need to add this context types to whitelist all required properties form parent context
Link.contextTypes = {
  history: PropTypes.object
};

class Redirect extends React.Component {
  // tell parent context provider which property is required
  static contextTypes = {
    history: PropTypes.object
  };

  componentDidMount() {
    const history = this.context.history; // get history from context
    const to = this.props.to; // get target from passed in props
    history.push(to); // update history
  };

  render() {
    return null;
  }
}

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
