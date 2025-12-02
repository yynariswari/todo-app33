import { createContext, useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export const VoteContext = createContext();

export function VoteProvider({ children }) {
  const { todos, updateTodoVotes } = useContext(TodoContext);

  const [currentUser, setCurrentUser] = useState(""); // <-- user aktif

  const addVote = (id) => {
    if (!currentUser) {
      alert("Pilih user dulu!");
      return;
    }

    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    updateTodoVotes(id, todo.votes + 1);
  };

  return (
    <VoteContext.Provider value={{ currentUser, setCurrentUser, addVote }}>
      {children}
    </VoteContext.Provider>
  );
}
