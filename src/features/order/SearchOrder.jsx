import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search for an order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="foucs:outline-none ms:w-36 w-28 rounded-full px-4 py-2 text-sm  transition-all duration-300
        placeholder:text-stone-400
        focus:outline-none
        focus:ring focus:ring-yellow-400 focus:ring-opacity-50 focus:ring-offset-2
        focus:duration-300
        sm:w-64
        sm:focus:w-72
        "
      />
    </form>
  );
}
