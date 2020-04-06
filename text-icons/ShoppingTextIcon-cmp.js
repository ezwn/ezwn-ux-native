import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { TextIcon } from "./TextIcon-cmp";

export const ShoppingTextIcon = ({ color, textStyle, text }) => {
  return (
    <TextIcon
      icon={<FontAwesomeIcon icon={faShoppingCart} color={color} />}
      text={text}
      textStyle={textStyle}
    />
  );
};

ShoppingTextIcon.defaultProps = {
  text: "SHOPPING"
};
