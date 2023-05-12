import React, {useContext} from "react";
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
import AppleSvg from "../../assets/Apple.svg";
import GoogleSvg from "../../assets/Google.svg";
import LogoSvg from "../../assets/Finance.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInButton } from "../../components/SignInButton";
import { AuthContext } from "../../AuthContext";

export function SignIn() {
  const data = useContext(AuthContext);
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
          <SignInButton title="Entrar com Google" svg={GoogleSvg} />
          <SignInButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
