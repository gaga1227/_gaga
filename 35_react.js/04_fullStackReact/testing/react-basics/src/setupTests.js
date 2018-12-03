// Note: Create React App configures Jest so that this file is loaded automatically before each test suite run

// temporary fix for React 16 via https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-334801311
import raf from './tempPolyfills'

import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure enzyme with proper adaptor matching react version
Enzyme.configure({ adapter: new Adapter() });
