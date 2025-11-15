import "./layouts.css";

function Cuenta({ invertido, setInvertido, stakeado, setStakeado }) {
  return (
    <article className="cuenta background">
      <h1 className="mr">
        <code>Cuenta</code>
      </h1>

      <h3>Saldo líquido: ${invertido.toFixed(2)}</h3>
      <h3>Saldo stakeado: ${stakeado.toFixed(2)}</h3>

      <p>
        <code>Total : ${(invertido + stakeado).toFixed(2)}</code>
      </p>

      <button
        className="button-style"
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
        className="button-style"
        onClick={() => {
          if (window.confirm("¿Estás seguro de retirar el total?")) {
            const totalARecuperar = stakeado;
            setStakeado(0);
            setInvertido(invertido + totalARecuperar);
          }
        }}
      >
        Retirar el Stake
      </button>

      <p>
        <code>No compartas los datos privados de tu cuenta JAMÁS</code>
      </p>
    </article>
  );
}

export default Cuenta;
