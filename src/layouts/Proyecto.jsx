function Proyecto({ invertido, setInvertido }) {
  return (
    <>
    <section className="container">
      <article className="row  mt-3">
          <button className="col-sm-2 offset-md-3" onClick={() => setInvertido(invertido + 10)}>
            Agregar dinero
          </button>
          <button className="col-sm-2 offset-md-3"
            onClick={() => {
              if (invertido <= 0) {
                alert("No se puede retirar más saldo");
              } else {
                setInvertido(invertido - 10);
              }
            }}
          >
            retira dinero
          </button>
     
      </article>
      </section>
    </>
  );
}

export default Proyecto;
