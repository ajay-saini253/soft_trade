import React, { useState } from "react";
import afterImg from "../../../images/hero/business-now.png";

const BlurSlider = () => {
  const [blurWidth, setBlurWidth] = useState(50); // 50% blurred initially

  const handleSliderChange = (e) => {
    setBlurWidth(Number(e.target.value));
  };

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      {/* Inline style tag for CSS */}
      <style>
        {`
          .slider-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          .image-full {
            width: 100%;
            display: block;
          }

          .image-blur {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            filter: blur(3px) grayscale(70%);
            pointer-events: none;
            transition: width 0.4s ease;
          }

          .slider {
            width: 100%;
            margin-top: 10px;
          }
        `}
      </style>

      <div className="slider-container">
        {/* Clear image (background) */}
        <img src={afterImg} alt="colorful" className="image-full" />

        {/* Blurred overlay (width controlled by slider) */}
        <img
          src={afterImg}
          alt="blurred"
          className="image-blur"
          style={{ width: `${blurWidth}%` }}
        />
      </div>

      {/* Range input slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={blurWidth}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default BlurSlider;
