import "./styles.css";

export default function SearhBar() {
  return (
    <div className="container">
    <form className="search-bar">
      <input type="text" placeholder="Digite sua busca" />
      <div className="search-btn"> BUSCAR </div>
    </form>
    </div>
  );
}
