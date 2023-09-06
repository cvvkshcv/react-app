import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TodoItem = {
  text: string;
  done: boolean;
  id: string;
};

const Todo = () => {
  const [task, setTask] = useState<TodoItem[]>([]);
  const [sort, setSort] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const val: string = input.current?.value || "";
    setTask([
      ...task,
      {
        id: Math.floor(Math.random() * 10000) + "",
        text: val,
        done: false,
      },
    ]);
  };

  const handleRemove = (_task: TodoItem) => {
    const newList = task.filter((t) => t.id !== _task.id);
    setTask(newList);
  };

  const _sort = (a: TodoItem, b: TodoItem) => {
    if (!sort) return 0;
    else return a.text.localeCompare(b.text);
  };

  const animationPros = {
    inital: { opacity: 0, x: 10 },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0,
    },
    exit: { opacity: 0, x: -10 },
  };

  return (
    <div className="w-[50%]">
      <button
        className="bg-blue-600 p-4 text-white"
        onClick={() => setSort(!sort)}
      >
        Sort
      </button>
      <input type="text" ref={input} />
      <button onClick={handleAdd}>Add todo</button>
      <AnimatePresence initial={false}>
        {[...task].sort(_sort).map((t) => (
          <motion.li
            key={t.id}
            layout
            value={t.text}
            onClick={() => handleRemove(t)}
            {...animationPros}
          >
            <input type="checkbox" /> {t.text}
          </motion.li>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Todo;
