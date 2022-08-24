import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Mundo"} />
      <ItemListContainer greeting={"Braian"} />
      <ItemListContainer greeting={"Burini"} />
    </div>
  );
}

export default App;
