
import React, {  useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState("");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");

  

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif,loading,fetchData} = useGif(tag);

  

 
  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]">
      <h1 className="text-2xl underline font-bold"> Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        className="w-10/12   text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => { setTag(event.target.value)}}
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
