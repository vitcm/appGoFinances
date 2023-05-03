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

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
    type: "positive" | "negative";
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props{
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>
      <Footer>
        <Categoria>
          <Icon name={data.category.icon} />
          <Type>{data.category.name}</Type>
        </Categoria>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
}
