import Ligne from "../svg/ligne";
import Mask from "../../assets/images/Mask group.png";
import Etoiles from "../svg/Etoiles";
import Os from "../svg/Os";

import "./LeFlair.css";

function flair() {
  return (
    <div className="flair__container">
      <div className="flair__texte">
        <p>
          L'art du <span className="color1">flair</span> et la Gestion des
          Peurs: <br />
          Votre Chien, Révélé et <span className="color1">Epanoui </span>!{" "}
        </p>
        <Ligne />
      </div>
      <div className="flair__img">
        <div className="flair__chien">
          <img className="flair__mask" src={Mask} alt="Tempete le chien" />
        </div>
        <div className="flair__etoiles1">
          <Etoiles className="Etoiles__1" />
        </div>
        <div className="flair__etoiles2">
          <Etoiles className="Etoiles__2" />
        </div>
        <Os />
      </div>
    </div>
  );
}

export default flair;
