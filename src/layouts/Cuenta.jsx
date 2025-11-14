import { useState } from "react";
import "./layouts.css";

function Cuenta() {
  const [invertido, setInvertido] = useState(80.40);
  const [stakeado, setStakeado] = useState(40.15);

  return (
    <>
      <article className="cuenta background">
        <h1 className="mr">cuenta</h1>
        <h3>salgo liquido: ${(invertido).toFixed(2)}</h3>
        <h3>salgo stakeado: ${(stakeado).toFixed(2)}</h3>
        <p>
          <code>Total : ${(invertido + stakeado).toFixed(2)}</code>
        </p>
        <button
  onClick={() => {
    if (window.confirm("¿Estás seguro de invertir el total?")) {
      setStakeado(stakeado + 80.4);
      setInvertido(invertido - 80.4);
    }
  }}
>
  Invertir total
</button>
      </article>
    </>
  );
}

export default Cuenta;
