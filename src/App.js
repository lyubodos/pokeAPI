import PokemonList from "./PokemonList";
import { useState, useEffect } from 'react';
import axios from "axios";


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
   
  }, [currentUrl])


  if(loading) return "LOading...."

  return (
    <>
      <PokemonList listPoke={pokeList} />

      <button >Next</button>
      <button >Previous</button>

    </>
  );
}

export default App;
