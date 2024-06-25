import Navbar from "./components/Navbar";
import Search from "./components/Search";
import DisplayDiaries from "./components/DisplayDiaries";
import AddNewCard from "./components/AddNewCardButton";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Search />
        <DisplayDiaries />
        <AddNewCard />
      </div>
    </>
  );
}

export default App;
