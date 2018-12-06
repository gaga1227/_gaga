import React from 'react';
import createHistory from 'history/createBrowserHistory';

const history = createHistory(); // create history utils helper

const Route = ({path, component: ComponentPassedViaProp}) => {
  const pathname = window.location.pathname;

  if (!path || !path.length) {
    return null;
  }

  // match path and return component
  if (pathname.toLowerCase() === path.toLowerCase()) {
    console.log('same');
    // normal render without JSX with a passed in component
    // this is recommended due to its easy to identify as a dynamic component
    // return React.createElement(component);

    // alternative way to render passed in component, make sure component name is capitalized
    return <ComponentPassedViaProp/>;
  }

  return null;
};

class App extends React.Component {
  componentDidMount() {
    // make sure every time history changes, the component is forced to re-render
    // so the Route component can match pathname and render correct route component
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <div
        className='ui text container'
      >
        <h2 className='ui dividing header'>
          Which body of water?
        </h2>

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
        </ul>

        <hr />

        {/* We'll insert the Route components here */}
        <Route path='/atlantic' component={Atlantic} />
        <Route path='/pacific' component={Pacific} />
      </div>
    );
  }
}

const Link = ({to, children}) => (
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

export default App;
