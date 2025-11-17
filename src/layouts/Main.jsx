
//tenemos que aprender a usar estas giladas, pero venimos de puta madre
function Main({ stakeado }) {

  return (
    <article className="main background-stake">
      <h1>
        <code>Staking</code>
      </h1>
      <h2 className="code">Saldo stakeado: ${stakeado.toFixed(2)}</h2>
      <h3><code>para mas informacion ingresa a nuestros terminos y condiciones</code></h3>
    </article>
  );
}

export default Main;
