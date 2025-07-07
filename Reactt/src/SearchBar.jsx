import React, { useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import axios from "axios";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/search", {
        query: query,
      });
      alert(response.data.response);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" onClick={handleSearch} />
      <input
        type="text"
        placeholder="Search Google or type a URL"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaMicrophone className="mic-icon" />
    </div>
  );
}

export default SearchBar;
