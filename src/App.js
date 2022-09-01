import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar";
import ItemCounts from "./component/ItemCounts/ItemCounts";
import ItemList from "./component/ItemList/ItemList";

function App() {
  return (
    <div>
      <NavBar />
      <ItemCounts />
      <ItemListContainer>
        <ItemList />
      </ItemListContainer>
    </div>
  );
}

export default App;
