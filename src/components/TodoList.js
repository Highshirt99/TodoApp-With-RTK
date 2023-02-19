import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../reduxStore/TodoSlice";

function TodoList({ item }) {
  const dispatch = useDispatch()
  const [mark, setMark] = useState(false);

  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      className={`${
        mark
          ? "border-l-orange-500  border-orange-900"
          : "border-l-green-500 border-green-900"
      } w-full font-titleFont
       font-medium text-base
    border-[1px] border-l-[6px] px-2 py-1 cursor-pointer
     flex justify-between
    items-center`}
      onClick={() => setMark(!mark)}
    >
      {item.todo}
      <span
        onClick={() => {dispatch(deleteTodos(item._id))}}
        className="text-xl text-gray-300 hover:text-red-500 duration-300 cursor-pointer"
      >
        <MdDelete />
      </span>
    </motion.li>
  );
}

export default TodoList;
