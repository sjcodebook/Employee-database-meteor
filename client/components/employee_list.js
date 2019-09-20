import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import Employee_detail from './employee_detail';

const PER_PAGE = 20;

class Employee_list extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    // props.employees => an array of employees objects
    return (
      <div>
        <div className='employee-list'>
          {this.props.employees.map(employee => (
            <Employee_detail key={employee._id} employee={employee} />
          ))}
        </div>
        <button
          onClick={this.handleButtonClick.bind(this)}
          className='btn btn-primary'
        >
          Load More...
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return { employees: Employees.find({}).fetch() };
}, Employee_list);
