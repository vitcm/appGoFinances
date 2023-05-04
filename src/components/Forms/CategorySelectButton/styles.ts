import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 18px;
  margin-bottom: 8px;
  margin-top: 8px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;
