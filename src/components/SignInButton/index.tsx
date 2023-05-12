import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Button, ImageContainer, Text } from "./style";
import { SvgProps } from "react-native-svg";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
}
