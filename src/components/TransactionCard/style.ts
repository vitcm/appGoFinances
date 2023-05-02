import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.color.shape};
  width: ${RFValue(300)}px;
  border-radius: 7px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.text_dark};
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.color.text_dark};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Categoria = styled.View`
  flex-direction: row;
`;

export const Data = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.color.text};
`;

export const Type = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.text};
  margin-left: 17px;
`;
