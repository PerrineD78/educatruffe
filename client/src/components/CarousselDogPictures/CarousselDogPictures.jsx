import { dog1, dog2, dog3 } from "./Import";
import "./CarousselDogPictures.css";

function CarousselDogPictures() {
  return (
    <div className="caroussel">
      <div className="caroussel__container">
        <img className="dogImg" src={dog1} alt="Braque qui renifle une voiture" />
        <img src={dog2} alt="Golden vu du dessus" />
        <img src={dog3} alt="Le chien Tempete qui saute dnas un cerceau" />
      </div>
    </div>
  );
}

export default CarousselDogPictures;
