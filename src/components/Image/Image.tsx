import React from "react";

import { ImageT } from "./types";

export const Image: React.FC<ImageT> = (props) => {
  const { imageURL, imageAlt } = props;
  return <img src={imageURL} alt={imageAlt} />;
};
