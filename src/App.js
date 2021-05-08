import React, { useState, useEffect } from "react";
//import Api from "./service/api";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/silvajeferson82/repos"
    );
    const data = await response.json();

    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter((repo) => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  /**Exemplo de uso do useState */
  /*{ id: 1, name: "Repo - 1 " },
    { id: 2, name: "Repo - 2 " },
    { id: 3, name: "Repo - 3 " }
  ]);

  function handleAddRepository() {
    setRepositories([...repositories, { id: Math.random(), name: "New Repo" }]);
  }*/

  return (
    <>
      <h1>Listagem API GitHub</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <br />
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
