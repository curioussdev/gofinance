import React from 'react';

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
 } from './style';

export function TransactionCard(){
    return(
        <Container>
            <Title>Desenvolvimento de site</Title>

            <Amount>15.000,00 KZ</Amount>

            <Footer>
                <Category>
                    <Icon name="dollar-sign" />
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>24/02/2023</Date>
            </Footer>



        </Container>
    );
};