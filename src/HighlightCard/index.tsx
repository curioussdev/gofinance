import React from "react";

import { 
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    LastTransaction,
 } from "./styles";

interface Props {
    title: string,
    amount: string,
    lastTransaction: string,
}



export function HighlightCard( {title, amount, lastTransaction}: Props){
    return(
        <Container>
            <Header>
                <Title>{ title }</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Content>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Content>

        </Container>
    )
};