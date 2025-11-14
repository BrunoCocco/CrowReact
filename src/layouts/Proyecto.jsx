function Proyecto({ invertido, setInvertido }) {
  return (
    <>
      <article className="proyecto">
        <div>
          <button onClick={() => setInvertido(invertido + 10)}>
            Agregar saldo
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if (invertido <= 0) {
                alert("No se puede retirar más saldo");
              } else {
                setInvertido(invertido - 10);
              }
            }}
          >
            Agregar saldo
          </button>
        </div>
      </article>
    </>
  );
}

export default Proyecto;
