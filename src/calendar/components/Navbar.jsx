export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"> </i>
        &nbsp; Flavio
      </span>
      <button className="btn btn-outline-danger px-3">
        <span>
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;Salir
        </span>
      </button>
    </div>
  );
};
