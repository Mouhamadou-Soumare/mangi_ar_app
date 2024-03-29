import React, { useState } from "react";
import axios from "axios";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://mangi-server.vercel.app/product/getNews/${searchTerm}`
      );
      setSearchResults(response.data.news); // Assurez-vous que la propriété correcte est utilisée ici
    } catch (error) {
      console.error(
        "Erreur lors de la recherche des actualités :",
        error.message
      );
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 ">
                   <h1 className=" text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto title-h1 pb-9 text-center">
      Recherche d'actualités</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Rechercher des actualités..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Rechercher
        </button>
      </div>

      <ul className="mt-4">
        {searchResults.map((news, index) => (
          <li key={index} className="mb-2">
            <strong>{news.title}</strong>
            <p className="text-gray-500">{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
