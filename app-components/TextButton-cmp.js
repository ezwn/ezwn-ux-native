import React from "react";
import { Text } from "react-native";

import { useUxContext } from "ezwn-ux-native/UxContext";
import { Button } from "./Button-cmp";

export const TextButton = (props) => {
    const { styleSheet } = useUxContext();

    const { children, alt } = props;

    return <Button {...props} style={alt ? styleSheet.buttonAlt : styleSheet.button}>
        <Text style={styleSheet.buttonText}>{children}</Text>
    </Button>;
}
