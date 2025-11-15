import { useState } from "react";
import "./components.css";
import Cuenta from "../layouts/Cuenta";
import Proyecto from "../layouts/Proyecto";
import Main from "../layouts/Main";

function Inicio() {
  const [invertido, setInvertido] = useState(0);
  const [stakeado, setStakeado] = useState(0)
  return (
    <>
      <section className="container">
        <Cuenta invertido={invertido} setInvertido={setInvertido} stakeado={stakeado} setStakeado={setStakeado} />
        <Proyecto invertido={invertido} setInvertido={setInvertido} />
        <Main stakeado={stakeado} setStakeado={setStakeado}/>
      </section>
    </>
  );
}

export default Inicio;
