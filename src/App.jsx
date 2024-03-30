import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner/Banner";

function App() {

  return (
    <>
    <Banner/> 
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a la tienda de Gonzo!"}/>
    </>
  )
}

export default App
