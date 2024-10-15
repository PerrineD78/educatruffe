import { useState } from "react";
import MesSuperServices from "../svg/MesSuperServices";
import SuperImage from "./SuperImage";
import SuperText from "./SuperText";

import "./SuperServices.css";

function SuperServices() {
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedText, setSelectedText] = useState(1);
  const [selectedTitre, setSelectedTitre] = useState(1);

  return (
    <div className="super__services">
      <div className="super__services__title">
        <MesSuperServices />
      </div>
      <div className="super__service__carrousel">
        <div className="carrousel__image">
          <SuperImage selectedImage={selectedImage} />
        </div>
        <div className="carrousel__texte">
          <SuperText
            selectedText={selectedText}
            setSelectedText={setSelectedText}
            setSelectedImage={setSelectedImage}
            selectedTitre={selectedTitre}
            setSelectedTitre={setSelectedTitre}
          />
        </div>
      </div>
    </div>
  );
}

export default SuperServices;
