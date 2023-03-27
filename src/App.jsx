import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center" >
      <h1 className="w-10/12 bg-white rounded-lg  text-center mt-[40px]  px-10 py-2 text-4xl font-bold ml-[10px] mr-[10px]">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
