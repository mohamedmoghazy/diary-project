import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import DisplayDiaries from "./components/DisplayDiaries";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Search />
        <h1 className="text-3xl text-blue-600 font-bold">Personal Diary</h1>
        <DisplayDiaries />
      </div>
    </>
  );
}

export default App;
