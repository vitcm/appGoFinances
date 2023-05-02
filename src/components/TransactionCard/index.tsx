import React from "react";
import { Container, Title, Amount, Categoria, Data, Icon, Type, Footer } from "./style";

export function TransactionCard() {
  return (
    <Container>
      <Title>Titulo</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Categoria>
          <Icon name="dollar-sign" />
          <Type>Alimentação</Type>
        </Categoria>
        <Data>13/04/2020</Data>
      </Footer>
    </Container>
  );
}
