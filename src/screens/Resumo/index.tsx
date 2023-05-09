import React from "react";
import { Container, Header, Title } from "./styles";

export function Resumo() {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard />
    </Container>
  );
}
