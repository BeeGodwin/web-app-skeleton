
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { setupDOM } = require('./setup/dom');
Enzyme.configure({adapter: new Adapter()});
setupDOM(global);