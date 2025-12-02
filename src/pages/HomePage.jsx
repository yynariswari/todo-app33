import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { VoteContext } from "../context/VoteContext";
import { useNavigate } from "react-router-dom";
import UserSelect from "../components/UserSelect";

export default function HomePage() {
  const { todos } = useContext(TodoContext);
  const { addVote } = useContext(VoteContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Todo List</h1>

      {/* ⬇⬇⬇ Tambahin ini supaya user list muncul */}
      <UserSelect />

      {todos.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <h3>{item.title}</h3>
          <p>Votes: {item.votes}</p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addVote(item.id);
            }}
          >
            👍 Vote
          </button>
        </div>
      ))}
    </div>
  );
}
