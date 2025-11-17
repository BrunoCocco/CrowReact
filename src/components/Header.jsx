import "./components.css";

function Header({ setVista }) {
  return (
    <>
      <section className="container bg-black">
        <article className="row mt-4 mb-3">
          <button
            className="offset-md-2 col-md-3"
            onClick={() => {
              setVista("Wallet");
            }}
          >
            wallet
          </button>
          <button
          className="offset-md-2 col-md-3"
            onClick={() => {
              setVista("VistaProy");
            }}
          >
            vista proyectos
          </button>
        </article>
      </section>
    </>
  );
}

export default Header;
