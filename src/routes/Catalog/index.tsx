import Card from "../../Components/Card";
import NavHeader from "../../Components/NavHeader";
import SearhBar from "../../Components/SearchBar";
import "./styles.css";

export default function Catalog() {
  return (
    <>
      <NavHeader />
      <main className="ct-catalog-main">
    
        <section id="ct-catalog-section">
          <div className="ct-search-bar-container">
            <SearhBar />
          </div>
          <div className="ct-catalog-cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
