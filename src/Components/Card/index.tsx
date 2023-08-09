import "./styles.css";
import imgCar from "../../assets/car.png";
import Button from "../Button";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <img className="card-img" src={imgCar} alt="" />

        <h2>Audi Supra TT</h2>
        <p> <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
          </i></p>
    <Button />
      </div>
    </div>
  );
}
