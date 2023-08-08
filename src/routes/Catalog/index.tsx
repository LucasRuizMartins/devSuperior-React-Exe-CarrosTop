import Card from "../../Components/Card";
import NavHeader from "../../Components/NavHeader";
import SearhBar from "../../Components/SearchBar";

export default function Catalog() {
  return (
    <>
      <NavHeader />
      <SearhBar />
      <div className="grid-card">
        <Card />
        <Card />
      </div>
    </>
  );
}
