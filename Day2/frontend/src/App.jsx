import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((Response) => {
        setJokes(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Vivek Sharma and jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.id}</h3>
            <h3>{joke.title}</h3>
            <p>{joke.description}</p>
            </div>
      ))}
    </>
  );
}

export default App;
