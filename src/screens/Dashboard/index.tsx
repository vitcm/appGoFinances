import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  // LogoutButton
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Salário",
      amount: "R$ 8.000,00",
      category: { name: "Salário", icon: "dollar-sign" },
      date: "03/05/2023",
    },
    {
      id: "2",
      type: "negative",
      title: "Aluguel",
      amount: "R$ 1.800,00",
      category: { name: "Moradia", icon: "home" },
      date: "15/05/2023",
    },
    {
      id: "3",
      type: "negative",
      title: "Supermercado",
      amount: "R$ 678,80",
      category: { name: "Contas", icon: "coffee" },
      date: "07/04/2023",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/102363419?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vitórya</UserName>
            </User>
          </UserInfo>
        </UserWrapper>

        {/* <LogoutButton onPress={() => {}}> */}
        <Icon name="power" />
        {/* </LogoutButton> */}
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
