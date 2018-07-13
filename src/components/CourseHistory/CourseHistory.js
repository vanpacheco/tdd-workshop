import React from 'react';
import { Table } from 'emerald-ui';

import * as api from '../../api';
import * as utils from '../../utils';

class CourseHistory extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    api.courses
      .fetchCourses()
      .then(({ data: { items } }) => this.setState({ courses: items }));
  }

  render() {
    const { courses } = this.state;

    return (
      <Table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Transcript</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{utils.startCase(c.name)}</td>
              <td>{c.licenseNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CourseHistory;
