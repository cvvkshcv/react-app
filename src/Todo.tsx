import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// npm i framer-motion

type TodoItem = {
  text: string;
  done: boolean;
  id: string;
};

const btnAnimation = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.8,
  },
};

const Todo = () => {
  const [task, setTask] = useState<TodoItem[]>([]);
  const [sort, setSort] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const val: string = input.current?.value || "";
    if (!val) return;
    setTask([
      ...task,
      {
        id: Math.floor(Math.random() * 10000) + "",
        text: val,
        done: false,
      },
    ]);
    if (input.current) input.current.value = "";
  };

  const handleRemove = (_task: TodoItem) => {
    const newList = task.filter((t) => t.id !== _task.id);
    setTask(newList);
  };

  const _sort = (a: TodoItem, b: TodoItem) => {
    if (!sort) return 0;
    else return a.text.localeCompare(b.text);
  };

  return (
    <div className="lg:container mx-auto">
      <div className="flex mt-4">
        <motion.button
          {...btnAnimation}
          className="bg-blue-600 p-4 text-white rounded"
          onClick={() => setSort(!sort)}
        >
          Sort
        </motion.button>

        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mx-4 text-grey-darker"
          placeholder="Add Todo"
          ref={input}
        />

        <motion.button
          {...btnAnimation}
          onClick={handleAdd}
          className="w-32 p-4 rounded text-teal border-teal bg-green-400 hover:shadow-md transition"
        >
          Add todo
        </motion.button>
      </div>

      {task.length === 0 && (
        <>
          <div className="bg-red-300 text-red-800 p-4 text-center rounded mt-4 uppercase">
            No result found
          </div>
        </>
      )}

      <motion.ul layout className="mt-3">
        <AnimatePresence>
          {[...task].sort(_sort).map((t) => (
            <motion.li
              layout
              className="bg-gray-600 text-white p-4 mt-2 rounded text-sm"
              key={t.id}
              value={t.text}
              onClick={() => handleRemove(t)}
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                x: -10,
                opacity: 0,
                backgroundColor: "red",
              }}
            >
              {t.text}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default Todo;
