import React from 'react';
import { shallow } from 'enzyme';
import { assert, stub } from 'sinon';

import CourseHistory from './CourseHistory';
import * as api from '../../api';
import { Table } from 'emerald-ui';

describe('CourseHistory', () => {
  let wrapper, fetchCoursesStub;

  beforeEach(() => {
    fetchCoursesStub = stub(api.courses, 'fetchCourses');
    fetchCoursesStub.resolves({ data: { items: fakeState.courses } });
    wrapper = shallow(<CourseHistory />);
  });

  afterEach(() => {
    fetchCoursesStub.restore();
  });

  it('renders without crashing', () => {
    // 1. Renderizar el componente
    // 2. Revisar el DOM resultante
    expect(wrapper).to.be.present();
  });

  it('is an emerald-ui Table', () => {
    expect(wrapper).to.have.type(Table);
  });

  it('renders a thead element', () => {
    expect(wrapper.find('thead')).to.be.present();
  });

  it('renders a tr element inside a thead element', () => {
    expect(wrapper.find('thead').find('tr')).to.be.present();
  });

  it('renders 2 th elements  inside a thead element', () => {
    expect(wrapper.find('thead').find('th')).to.have.length(2);
  });

  it('renders a tbody element', () => {
    expect(wrapper.find('tbody')).to.be.present();
  });

  it('renders each course‘s data', () => {
    wrapper.setState({ courses: fakeState.courses });
    wrapper.state('courses').map((course, index) => {
      const tr = wrapper
        .find('tbody')
        .find('tr')
        .at(index);

      expect(tr).to.be.present();
      expect(tr.find('td').at(0)).to.have.text(course.name);
      expect(tr.find('td').at(1)).to.have.text(course.licenseNumber);
    });
  });

  describe('componentDidMount', () => {
    it('fetches courses', () => {
      // expect(fetchCoursesStub.calledOnce).to.eql(true);
      // wrapper.instance().componentDidMount();
      assert.calledOnce(fetchCoursesStub);
    });

    it('saves courses in component‘s state', () => {
      expect(wrapper.state('courses')).to.eql(fakeState.courses);
    });
  });
});
