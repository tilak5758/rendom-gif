import useGif from '../hooks/useGif';
import Spinner from './Spinner';





const Random = () => {

  const {gif, loading , fetchData} = useGif()

 function clickHandler()  {
  fetchData()
 }
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]'>
      <h1 className='text-2xl underline font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
      }
      <button onClick={clickHandler}
      className="w-10/12 bg-yellow-500  text-lg py-2 rounded-lg mb-[15px]">
        Generate
      </button>
    </div>
  )
}

export default Random