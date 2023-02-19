import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import ErrorMsg from "./message/ErrorMsg";
import SuccessMsg from "./message/SuccessMsg";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "../reduxStore/TodoSlice";
import { motion } from "framer-motion";

function Form() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos.todosList);

  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const options = [
    {
      _id: 1,
      title: "Categories",
    },
    {
      _id: 2,
      title: "Personal",
    },
    {
      _id: 3,
      title: "Business",
    },
    {
      _id: 4,
      title: "Others",
    },
  ];

  const handleTodo = (e) => {
    e.preventDefault();
    if (task === "") {
      setError("Please, enter a task!");
      setShowError(true);
      setShowSuccessMsg(false);
      setCategory("Categories");
    } else if (category === "" || category === "Categories") {
      setError("Select a valid category!");
      setShowError(true);
      setShowSuccessMsg(false);
    } else {
      dispatch(
        addTodos({
          _id: Math.random(),
          todo: task,
          category: category,
        })
      );
      setSuccessMsg("Task added succesfully!");
      setShowSuccessMsg(true);
      setShowError(false);
      setCategory("Categories");
      setTask("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showError && setShowError(false);
      showSuccessMsg && setShowSuccessMsg(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showError, showSuccessMsg]);

  return (
    <div className="w-full bg-bodyColor flex flex-col gap-4">
      <div className="flex flex-col mdl:flex-row justify-center gap-4 mdl:h-12">
        <input
          placeholder="Enter a task"
          type="text"
          value={task}
          className="mdl:w-[80%] w-full h-12 mdl:h-full bg-bodyColor border-[1px] border-gray-400 py-2 px-4  placeholder:text-gray-400
        text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-blue-500
         hover:border-white"
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="w-full mdl:w-[20%] h-12 mdl:h-full relative">
          <select
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none
    rounded-md focus-visible:border-blue-500 hover:border-white text-sm"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {options.map((item) => (
              <option key={item._id}>{item.title}</option>
            ))}
          </select>

          <span className="absolute top-4 right-3">
            <FaChevronDown />
          </span>
        </div>
      </div>
      <button
        className="w-full border-[1px] border-gray-400
       hover:border-gray-200 duration-300 font-titleFont tracking-wider font-semibold
       text-gray-300 hover:text-blue-600 h-10 uppercase rounded-md"
        onClick={handleTodo}
      >
        Add Todo
      </button>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow mt-6 p-4">
          {todoItems.length > 0 ? (
            <>
              {todoItems.map((item) => (
                <TodoList key={item._id} item={item} />
              ))}
            </>
          ) : (
            <p
              className="text-orange-500 text-center text-base font-titleFont font-medium
        tracking-wide"
            >
              Your todo list is empty!
            </p>
          )}
        </ul>

        {todoItems.length > 0 && (
          <motion.button
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            duation={{
              duration: 0.5,
            }}
            onClick={() => setShowRemove(true)}
            className="w-40 h-8 text-sm font-titleFont text-orange-500 hover:text-red-500 font-semibold 
            mx-auto bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
          >
            Remove Todos
          </motion.button>
        )}
      </div>
      {showError && <ErrorMsg error={error} />}
      {showSuccessMsg && <SuccessMsg successMsg={successMsg} />}

      {showRemove && (
        <div
          className="w-full h-screen bg-bodyColor fixed top-0 left-0
      bg-opacity-80"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          px-8 py-4 bg-bodyColor border border-red-500 rounded-md z-50 
          flex flex-col gap-4 shadow-todoShadow">
            <p className="text-xl text-center font-medium text-red-500">
              Are you sure to
              <span className="font-semibold decoration-[1px]"> remove </span>
              all the todos ?
            </p>

          <div className="flex gap-4 items-center justify-center">

            <button className="px-6 py-2 text-base font-titleFont text-orange-500
            hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500
            hover:border-red-500 duration-300"

            onClick={() => dispatch(removeTodos())  & setShowRemove(false)}
            
            >Yes</button>
            <button
            className="px-6 py-2 text-base font-titleFont text-orange-500
            hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500
            hover:border-green-500 duration-300"

            onClick={() => setShowRemove(false)}
            
            >
            No</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
