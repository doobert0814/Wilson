import { useState, useEffect } from "react";


function useFetch(url) {
  const [favorites, setFavorites] = useState([]);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setFavorites(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [favorites];
}
export { useFetch }