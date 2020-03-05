import React from "react";

const BackgroundImage = ({ src, style = {}, ...props } = {}) => (
  <div
    style={Object.assign({ backgroundImage: `url(${src})` }, style)}
    {...props}
  />
);

export default BackgroundImage;
