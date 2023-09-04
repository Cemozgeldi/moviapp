import { useEffect } from "react";
import "./App.css";

//6e8fb051
const API_URL = "http://www.omdbapi.com?apikey=6e8fb051";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return <div className="App"></div>;
}

export default App;
