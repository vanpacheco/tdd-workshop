import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';

import fakeState from './utils/fakeState';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
global.expect = expect;
global.fakeState = fakeState;
