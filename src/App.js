import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar";
import ItemCounts from "./component/ItemCounts/ItemCounts";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Mundo"} />
      <ItemListContainer greeting={"Braian"} />
      <ItemListContainer greeting={"Burini"} />
      <ItemCounts />
    </div>
  );
}

export default App;
