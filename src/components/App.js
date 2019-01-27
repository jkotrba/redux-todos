import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodoUncontrolled';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => {
  return (
    <React.Fragment>
      <div className="row">
        <VisibleTodoList />
      </div>
      <div className="row">
        <AddTodo />
      </div>
      <div className="row">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
