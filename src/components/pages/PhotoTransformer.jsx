import { useState } from "react";

import BackgroundImg from "../../assets/images/colors.jpeg";
import ForegroundImg from "../../assets/images/colors-modified.jpeg";

const PhotoTransformer = () => {
  const [sliderVal, setSliderVal] = useState(50);

  const handleSlider = (e) => {
    setSliderVal(e.target.value);
  };

  return (
    <div className="photo-transformer-container">
      <div className="photo-transformer-wrapper">
        <div src={BackgroundImg} className="img background-img" />

        <div
          src={ForegroundImg}
          className="img foreground-img"
          style={{ width: `${sliderVal}%` }}
        />

        <input
          id="slider"
          type="range"
          min="0"
          max="100"
          onChange={handleSlider}
          value={sliderVal}
        />
      </div>
    </div>
  );
};

export default PhotoTransformer;
