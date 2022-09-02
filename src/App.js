import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar";
import ItemCounts from "./component/ItemCounts/ItemCounts";
import ItemList from "./component/ItemList/ItemList";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer>
        <ItemList />
      </ItemListContainer>
      <ItemCounts />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
