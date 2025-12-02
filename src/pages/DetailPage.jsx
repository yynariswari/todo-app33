import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { VoteContext } from "../context/VoteContext";

export default function DetailPage() {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const { addVote } = useContext(VoteContext);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) return <p>Todo tidak ditemukan</p>;

  return (
    <div>
      <h1>Detail Todo</h1>
      <h2>{todo.title}</h2>
      <p>Deskripsi: {todo.description}</p>
      <p>Votes: {todo.votes}</p>
    </div>
  );
}
