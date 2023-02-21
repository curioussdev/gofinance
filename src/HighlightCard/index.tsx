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





export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Content>
                <Amount>17.000,00 KZ</Amount>
                <LastTransaction>última Entrada, dia 13 de Abril</LastTransaction>
            </Content>

        </Container>
    )
};