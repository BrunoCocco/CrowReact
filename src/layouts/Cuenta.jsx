import {useState} from "react"
import "./layouts.css";

function Cuenta({ invertido, setInvertido }) {
  const [stakeado, setStakeado] = useState(40.15);

  return (
    <article className="cuenta background">
      <h1 className="mr">cuenta</h1>
      <h3>saldo líquido: ${invertido.toFixed(2)}</h3>
      <h3>saldo stakeado: ${stakeado.toFixed(2)}</h3>
      <p>
        <code>Total : ${(invertido + stakeado).toFixed(2)}</code>
      </p>

      <button
        onClick={() => {
          if (window.confirm("¿Estás seguro de invertir el total?")) {
            setStakeado(stakeado + invertido);
            setInvertido(0);
          }
        }}
      >
        Invertir total
      </button>
       <button
        onClick={() => {
          if (window.confirm("¿Estás seguro de retirar el total?")) {
            setStakeado(stakeado - stakeado);
            setInvertido(invertido + stakeado);
          }
        }}
      >
        Invertir total
      </button>
    </article>
  );
}

export default Cuenta;
