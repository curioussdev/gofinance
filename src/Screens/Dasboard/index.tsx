import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCards";


import {
    Container,
    UserWrapper,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    IconLogout,
    SwitchButton,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";



export function Dashboard() {
    const data = [
        {
        type: 'positive',
        title: "Venda de Casa",
        amount: "15.000,00 KZ",
        category: {
            name: "Vendas",
            icon: 'dollar-sign',
    },
        date: "12/03/2023"
    },
    {
        type: 'negative',
        title: "Compra de PC",
        amount: " - 25.000,00 KZ",
        category: {
            name: "Vendas",
            icon: 'dollar-sign',
    },
        date: "12/03/2023"
    },
    {
        type: 'positive',
        title: "Vendi meu Carro",
        amount: "15.000,00 KZ",
        category: {
            name: "Vendas",
            icon: 'dollar-sign',
    },
        date: "12/03/2023"
    },
    {
        type: 'negative',
        title: "Aluguel do apartamento",
        amount: " - 89.000,00 KZ",
        category: {
            name: "Casa",
            icon: 'dollar-sign',
    },
        date: "12/03/2023"
    }
];

return (
    <Container>
        <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/65780944?v=4' }} />
                    <User>
                        <UserGreetings>Olá, </UserGreetings>
                        <UserName>Billadas</UserName>
                    </User>
                </UserInfo>
                <IconLogout name="log-out" />
                <SwitchButton />
            </UserWrapper>

        </Header>

        <HighlightCards>
            <HighlightCard
                type="total"
                title="Total"
                amount="65,000.00 kz"
                lastTransaction="01 a 15 de Abril"
            />
            <HighlightCard
                type="up"
                title="Entradas"
                amount="17,000.00 kz"
                lastTransaction="Última entrada, dia 13 de Abril"
            />
            <HighlightCard
                type="down"
                title="Saídas"
                amount="1,000.00 kz"
                lastTransaction="Última saída, dia 13 de Abril"
            />


        </HighlightCards>

        <Transactions>
            <Title>Listagem</Title>


            <TransactionList
                data={data}
                renderItem={({ item }) =>  <TransactionCard data={item} /> }
                showsVerticalScrollIndicator={false}
                
            />
`
            
        </Transactions>

    </Container>
);
};

