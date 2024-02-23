// TodoContext.js

import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isEditing: false,
    index: -1,
  });

  const handleTodoDone = (index) => {
    const doneTodo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setDoneTodos([...doneTodos, doneTodo]);
  };

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const descriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  const buttonClicked = () => {
    if (todo.isEditing) {
      updateClicked();
    } else {
      setTodos([...todos, todo]);
      setTodo({ title: "", description: "", isEditing: false, index: -1 });
    }
  };

  const deleteClicked = (index) => {
    const modifiedTodos = todos.filter((_, todoIndex) => index !== todoIndex);
    setTodos(modifiedTodos);
  };

  const editClicked = (index, todoItem) => {
    setTodo({
      title: todoItem.title,
      description: todoItem.description,
      isEditing: true,
      index: index,
    });
  };

  const updateClicked = () => {
    const newTodos = todos.map((data, dataIndex) => {
      if (dataIndex === todo.index) {
        return { title: todo.title, description: todo.description };
      }
      return data;
    });
    setTodos(newTodos);
    setTodo({ title: "", description: "", isEditing: false, index: -1 });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        doneTodos,
        setDoneTodos,
        todo,
        handleTodoDone,
        titleChange,
        descriptionChange,
        buttonClicked,
        deleteClicked,
        editClicked,
        updateClicked,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
