import "./styles.css";
import imgCar from "../../assets/car.png";

export default function Card() {
  return (
    <div className="container">
  
        <div className="card">
          <img className="card-img" src={imgCar} alt="" />

          <h2>Audi Supra TT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>

          <div className="btn-comprar"> COMPRAR </div>
        </div>
      </div>

  );
}
