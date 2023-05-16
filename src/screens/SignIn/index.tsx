import React, { useContext, useState } from "react";
import {
  Container,
  Header,
  TitleWrapper,
  LogoTitle,
  Title,
  SignInTitle,
  Footer,
  Logo,
  FooterWrapper,
} from "./styles";
import { ActivityIndicator, Alert, Platform } from "react-native";
import AppleSvg from "../../assets/Apple.svg";
import GoogleSvg from "../../assets/Google.svg";
import LogoSvg from "../../assets/Finance.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInButton } from "../../components/SignInButton";
import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
      //console.log("teste");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro! Não foi possível conectar a conta google.");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
      //console.log("teste");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro! Não foi possível conectar a conta apple.");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo>
            <LogoSvg width={RFValue(40)} height={RFValue(40)} />
          </Logo>
          <LogoTitle>gofinances</LogoTitle>
          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com{"\n"}uma das contas abaixo{" "}
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === 'ios'&&
            <SignInButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.color.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}
