import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Header = styled.View`
  height: 70%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const TitleWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const LogoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.color.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.color.shape};
  text-align: center;
  padding: 45px 40px;
`;

export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.shape};
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const Logo = styled.View`
  padding-top: 144px;
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
  flex-direction: column;
  justify-content: space-between;
`;
