import React from "react";
import ReactImageMagnify from "react-image-magnify";
const ImageMagnified = ({ url }) => {
  return (
    <div style={{zIndex : "999"}}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "product",
            isFluidWidth: true,
            src: url
          },
          largeImage: {
            src: url,
            width: 1200,
            height: 1800
          }
        }}
      />
    </div>
  );
};

export default ImageMagnified;
