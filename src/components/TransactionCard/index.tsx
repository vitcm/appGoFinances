import React from "react";
import {
  Container,
  Title,
  Amount,
  Categoria,
  Data,
  Icon,
  Type,
  Footer,
} from "./style";
import { categories } from "../../utils/categories";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const category = categories.filter(
    item => item.key === data.category
  )[0]; //pega a primeira posição
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>
      <Footer>
        <Categoria>
          <Icon name={category.icon} />
          <Type>{category.name}</Type>
        </Categoria>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
}
