import TodoItems from './TodoItems'
import React from 'react';

export default class TodoList extends React.Component {
    render () {
      console.log(this.props);
      var items = this.props.items.map((item, index) => {
        return (
          <TodoItems key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <ul className="list-group"> {items} </ul>
      );
    }
  }
