import React, { useState } from "react";

import Search from "./components/search";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            <img src="./hero.png" alt="" />
            Find Your favourte <span className="text-gradient">Movies</span>
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
}

export default App;
