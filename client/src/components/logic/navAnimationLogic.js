import { findDOMNode } from "react-dom";
import $ from "jquery";

export const animationShow = node => {
  const el = findDOMNode(node);

  $(el)
    .stop(true, true)
    .delay(200)
    .fadeIn(500);
};

export const animationHide = node => {
  const el = findDOMNode(node);

  $(el)
    .stop(true, true)
    .delay(200)
    .fadeOut(500);
};
