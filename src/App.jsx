import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greetingMessage = 'Bienvenido a mi tienda';

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greetingMessage} />
    </>
  );
}
export default App
