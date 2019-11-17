import { useState, useEffect } from "react";

const Search = (importNotes) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const search = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = importNotes.filter(pom => pom.title.toLowerCase().startsWith(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, importNotes]);

  const sortNotes = () => {
    setSearchResults(importNotes.sort(function (a, b) { return new Date(b.date) - new Date(a.date) }));
  };


  return {
    searchTerm,
    searchResults,
    search,
    sortNotes
  }
}
export default Search;