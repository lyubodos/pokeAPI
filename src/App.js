import PokemonList from "./components/PokemonList";
import { useState, useEffect } from 'react';
import axios from "axios";
import Pagination from "./components/Pagination";

import "./App.css";


function App() {

  const [pokeList, setpokeList] = useState([]);
  const [currentUrl , setCurrenturl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl , setNextUrl] = useState("");
  const [prevUrl , setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let cancel;

    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {

        setLoading(false);

        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        setpokeList(res.data.results);
        
      });

      return () => cancel()
   
  }, [currentUrl]);


  function nextPage() {
    setCurrenturl(nextUrl);
  }

  function prevPage() {
    setCurrenturl(prevUrl);
  }

  if(loading) return "LOading...."

  
  return (
    <>
      <h1>PokeAPI Data</h1>
      <PokemonList listPoke={pokeList} />
      <Pagination 
      goToNext={nextUrl ? nextPage : null}
      goToPrev={prevUrl ? prevPage : null} />
      
    </>
  );
}

export default App;
