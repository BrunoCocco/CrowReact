// src/App.jsx
import { useState, useEffect } from "react";
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [invertido, setInvertido] = useState(0);
  const [stakeado, setStakeado] = useState(0);
  const [vista, setVista] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      //Este modifica si es mayor que cero
      setStakeado((prev) => {
        if (prev > 0) return prev + prev / 1000;
        return prev;
      });
    }, 3000);

    return () => clearInterval(intervalo);
  });
  return (
    <>
      <section className="container">
        <article className="row">
          <Header setVista={setVista} />
          <Inicio
            vista={vista}
            invertido={invertido}
            setInvertido={setInvertido}
            stakeado={stakeado}
            setStakeado={setStakeado}
          />
        </article>
      </section>
    </>
  );
}

export default App;
