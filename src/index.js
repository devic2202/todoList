import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import LoginForm from "./login/loginForm"
import TodoApp from "./App"

var todoItems = [];
todoItems.push({ index: 1, value: "learn React", done: false });
todoItems.push({ index: 2, value: "Study Angular", done: true });
todoItems.push({ index: 3, value: "Study Redux", done: true });

// export default class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addItem = this.addItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//     this.markTodoDone = this.markTodoDone.bind(this);
//     this.state = { todoItems: todoItems };
//   }
//   addItem(todoItem) {
//     todoItems.unshift({
//       index: todoItems.length + 1,
//       value: todoItem.newItem,
//       done: false
//     });
//     this.setState({ todoItems: todoItems });
//   }
//   removeItem(itemIndex) {
//     todoItems.splice(itemIndex, 1);
//     this.setState({ todoItems: todoItems });
//   }
//   markTodoDone(itemIndex) {
//     var todo = todoItems[itemIndex];
//     todoItems.splice(itemIndex, 1);
//     todo.done = !todo.done;
//     todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
//     this.setState({ todoItems: todoItems });
//   }
//   render() {
//     return (
//       <div className="container">
//         <div id="main" className="row">
//           <h1>Todo List...</h1>
//           <div className="col-md-6">
//             <TodoForm addItem={this.addItem} />
//           </div>
//           <div className="col-md-6">
//             <TodoList
//               items={this.props.initItems}
//               removeItem={this.removeItem}
//               markTodoDone={this.markTodoDone}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <LoginForm />,
  document.getElementById("root")
);

serviceWorker.unregister();
