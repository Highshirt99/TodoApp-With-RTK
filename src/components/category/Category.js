import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoList from "../TodoList";
import { motion } from "framer-motion";

function Category() {
  const todoItems = useSelector((state) => state.todos.todosList);
  const [personalTodos, setPersonalTodos] = useState([]);
  const [businessTodos, setBusinessTodos] = useState([]);
  const [otherTodos, setOtherTodos] = useState([]);
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState(false);
  const [activeOthers, setActiveOthers] = useState(false);

  useEffect(() => {
    const personalCategories = todoItems.filter(
      (item) => item.category === "Personal"
    );
    setPersonalTodos(personalCategories);
    const businessCategories = todoItems.filter(
      (item) => item.category === "Business"
    );
    setBusinessTodos(businessCategories);
    const otherCategories = todoItems.filter(
      (item) => item.category === "Others"
    );
    setOtherTodos(otherCategories);
  }, [todoItems]);
  return (
   <>
   {todoItems.length > 0 &&
    <div className="w-full lgl:w-[850px] h-[200px] md:h-[150px]  bg-bodyColor  
    flex flex-col md:flex-row
      items-center justify-start">
      <div className="w-full md:w-1/6 h-full">
        <p
          className="categoryP"
          onClick={() =>
            setActivePersonal(true) &
            setActiveBusiness(false) &
            setActiveOthers(false)
          }
        >
          Personal
        </p>
        <p
          className="categoryP"
          onClick={() =>
            setActiveBusiness(true) &
            setActivePersonal(false) &
            setActiveOthers(false)
          }
        >
          Business
        </p>
        <p
          className="categoryP"
          onClick={() =>
            setActiveOthers(true) &
            setActivePersonal(false) &
            setActiveBusiness(false)
          }
        >
          Others
        </p>
      </div>

      <div className="w-5/6 h-full overflow-y-scroll flex items-center scrollbar-hide">
        <p
          className={`${
            activePersonal || activeBusiness || activeOthers ? "hidden" : ""
          } mx-auto text-green-500`}
        >
          Click on the tab to choose a todo category.
        </p>

        {activePersonal && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {personalTodos.length > 0 ? (
              <>
                {personalTodos.map((item) => (
                  <TodoList key={item._id} item={item} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Personal todo list is empty.
              </motion.li>
            )}
          </ul>
        )}
        {activeBusiness && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {businessTodos.length > 0 ? (
              <>
                {businessTodos.map((item) => (
                  <TodoList key={item._id} item={item} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Business todo list is empty.
              </motion.li>
            )}
          </ul>
        )}
        {activeOthers && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {otherTodos.length > 0 ? (
              <>
                {otherTodos.map((item) => (
                  <TodoList key={item._id} item={item} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Other todo list is empty.
              </motion.li>
            )}
          </ul>
        )}
      </div>
    </div>
    }
    </>
  );
}

export default Category;
