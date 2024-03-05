import React, { useState } from 'react';
import PropTypes from "prop-types";
import FakeUpload from "./FakeUpload";

const RotatableImage = ({children}) => {
  const [rotation, setRotation] = useState(0);

  const rotateImage = () => {
    setRotation(rotation + 360);
  };

  const imageStyle = {
    transform: `rotateY(${rotation}deg)`,
    transition: 'transform 3s ease-out'
  };

  return (
    <div
      src="your_image_source.jpg"
      alt="Rotatable"
      style={imageStyle}
      onClick={rotateImage}
    >
      {children}
    </div>
  );
};

export default RotatableImage;
RotatableImage.propTypes = {
children:PropTypes.node,

};