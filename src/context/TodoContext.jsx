import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar React Context",
      description:
        "Mempelajari cara membuat global state menggunakan Context API",
      votes: 0,
    },
    {
      id: 2,
      title: "Kerjakan modul 32",
      description: "Menyelesaikan modul 32 dan memperbaiki error yang muncul",
      votes: 0,
    },
    {
      id: 3,
      title: "Setor tugas todo list",
      description: "Upload project todo list ke GitHub dan submit link",
      votes: 0,
    },
    {
      id: 4,
      title: "Review materi Javascript",
      description: "Baca ulang materi array, object, dan asynchronous",
      votes: 0,
    },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const updateTodoVotes = (id, newVotes) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, votes: newVotes } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        setSelectedTodo,
        updateTodoVotes,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
