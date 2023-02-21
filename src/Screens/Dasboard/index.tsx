import React from "react";
import { Feather } from '@expo/vector-icons';
import { Switch } from "react-native";

import {
    Container,
    UserWrapper,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName
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
                </UserWrapper>
                <Feather name="log-out"/>
                <Switch />
            </Header>

        </Container>
    );
};

