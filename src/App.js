import { useEffect } from "react";
import "./App.css";
import PetGame from "./Components/PetGame/PetGame";


const tele = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tele.ready();
  });

  return (
    <>
      <PetGame></PetGame>
    </>
  );
}

export default App;
