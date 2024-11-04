import { useState } from "react";
import { numberLetters } from "../../helpers/arrayHelpers";

const RandomHex = () => {
  const [hexColor, setHexColor] = useState("");
  const count = 6;

  const mapRandomHex = () => {
    let ranHex = "";

    for (let i = 0; i < count; i++) {
      let randomChars =
        numberLetters[Math.floor(Math.random() * numberLetters.length)];

      ranHex += randomChars;
    }
    setHexColor(ranHex);
  };

  return (
    <div className="random-hex-container">
      <div className="random-hex-wrapper">
        <h1>#{hexColor}</h1>

        <button onClick={mapRandomHex}>Randomize!</button>
      </div>
    </div>
  );
};

export default RandomHex;
