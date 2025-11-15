import { useEffect } from "react";
//tenemos que aprender a usar estas giladas, pero venimos de puta madre
function Main({ stakeado, setStakeado }) {
  useEffect(() => {
  const intervalo = setInterval(() => {
    setStakeado(prev => {
      if (prev > 0) return prev + 0.01;
      return prev; // no sumar si es 0 o menos
    });
  }, 3000);

  return () => clearInterval(intervalo);
}, []);

  return (
    <article className="main">
      <h1>
        <code>Staking</code>
      </h1>
      <h2><code>Saldo stakeado: ${stakeado.toFixed(2)}</code></h2>
      <h3><code>para mas informacion ingresa a nuestros terminos y condiciones</code></h3>
    </article>
  );
}

export default Main;
