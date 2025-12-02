import { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

export default function UserSelect() {
  const { currentUser, setCurrentUser } = useContext(VoteContext);

  const users = [
    "Adit Pratama",
    "Rani Lestari",
    "Bima Saputra",
    "Salsa Ayu",
    "Dito Wirawan",
  ]; // user

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Pilih User: </label>
      <select
        value={currentUser}
        onChange={(e) => setCurrentUser(e.target.value)}
      >
        <option value="">-- pilih --</option>
        {users.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>
    </div>
  );
}
