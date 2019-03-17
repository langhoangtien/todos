import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-3" />
      <div className="col-md-6">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
      <div className="col-md-3" />
    </div>
  </div>
);

export default App;
