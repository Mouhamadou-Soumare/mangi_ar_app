import React, { useState } from "react";
import axios from "axios";

const SearchGps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false);

    try {
      const response = await axios.get(
        `https://mangi-server.vercel.app/product/getProductStoresNearby/${searchTerm}`
      );

      console.log(response);
      console.log("ratio");

      if (response.data.length === 0) {
        setNoResults(true);
      } else {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche des magasins :", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl mb-4">Recherche de magasins à proximité</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Rechercher un produit..."
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

      {loading && <div className="loader-container"><span className="loader"></span></div>}

      {noResults && <p>Aucun résultat trouvé.</p>}

      <ul className="mt-4">
        {Array.isArray(searchResults) &&
          searchResults.map((store, index) => (
            <li key={index} className="mb-2">
              <strong>{store.name}</strong>
              <p className="text-gray-500">{store.address}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchGps;
