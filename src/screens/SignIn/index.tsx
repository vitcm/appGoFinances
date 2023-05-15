import React, { useContext } from "react";
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
import { Alert } from "react-native";
import AppleSvg from "../../assets/Apple.svg";
import GoogleSvg from "../../assets/Google.svg";
import LogoSvg from "../../assets/Finance.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInButton } from "../../components/SignInButton";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro! Não foi possível conectar a conta google.");
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
          <SignInButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
