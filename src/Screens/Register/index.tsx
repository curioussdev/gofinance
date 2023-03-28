import React from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields
} from "./styles";

export function Resgister() {
    return (

        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form >
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                    />

                <TransactionTypeButton 
                    type="up"
                    title="Entrada"
                />

                </Fields>
                <Button title="Enviar" />

            </Form>






        </Container>
    );
}
