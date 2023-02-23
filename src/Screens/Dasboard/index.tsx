import React from "react";
import { HighlightCard } from "../../HighlightCard";



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
    HighlightCards

} from "./styles";

export function Dashboard() {
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
                <HighlightCard 
                    type="total"
                    title="Total" 
                    amount="65,000.00 kz" 
                    lastTransaction="01 a 15 de Abril"
                />
                
            </HighlightCards>

        </Container>
    );
};

