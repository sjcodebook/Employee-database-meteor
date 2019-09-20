import React from 'react';
import ReactDOM from 'react-dom';
import Employee_list from './components/employee_list';

const App = () => {
  return (
    <div>
      <Employee_list />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
