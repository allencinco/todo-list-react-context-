"use client"

import React from "react";
import { useTodoContext } from "@/Component/TodoContext";

export default function Todo() {
 const { todo, todos, doneTodos,  handleTodoDone, titleChange, descriptionChange, buttonClicked, deleteClicked, editClicked } = useTodoContext();

  return (
    <div
      className="flex justify-center flex-col items-center"
      style={{
        background: "linear-gradient(to bottom, #4FACFE, #00F2FE)",
        minHeight: "100vh",
      }}
    >
      <div className="grow shrink-0 w-[500px]">
        <div className="pt-5">
          <div className="text-lg font-bold text-white">" To-do list "</div>
          <div className="text-sm font-bold text-gray">Check if the list is not marked as done before you edit </div>
          Title:{" "}
          <input
            name="title"
            value={todo.title}
            onChange={titleChange}
            className="shadow pb-2 appearance-none border rounded w-full py-1 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
          />
          Description:{" "}
          <input
            name="description"
            value={todo.description}
            onChange={descriptionChange}
            className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
          />
          <button
            onClick={buttonClicked}
            className="mt-3 shadow bg-pink-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            {todo.isEditing ? "Update" : "Add todo"}
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
            className="text-lg pt-5 flex"
            style={{
              background: "transparent",
              borderBottom: "1px solid #4FACFE", 
            }}
              key={index}
            >
              <div className="grow">
                <div className="font-bold text-white">
                  {index + 1}: {todo.title}
                </div>
                <div>{todo.description}</div>
              </div>
              <div>
                <button
                  onClick={() => editClicked(index, todo)}
                  className="mt-3 mr-4 shadow bg-indigo-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteClicked(index)}
                  className="mt-3 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleTodoDone(index)}
                  className="mt-3 ml-4 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Done
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          {doneTodos.map((doneTodo, index) => (
            <li
              className="bg-transaparent-100 border-t border-b border-transparent-500 text-white"
              key={index}
            >
              {doneTodo.title}: {doneTodo.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
