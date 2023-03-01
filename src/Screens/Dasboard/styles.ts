import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; // Icon de logout da lib Feather
import { Switch } from "react-native"; // switch button
import {
    RFPercentage,
    RFValue
} from 'react-native-responsive-fontsize'  // Traz a independencia de px em proporção as telas de diferentes dispositivos

import { DataListProps } from '.'

interface TransactionProps  {
    type: 'positive' | 'negative'
}


export const Container = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.colors.background};

    
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(35)}px;

    flex-direction:  row;
    
    justify-content: space-between;
    align-items: center;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 50px;
`;

export const User = styled.View`
    margin-left: 16px;
`;

export const UserGreetings = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

`;

export const IconLogout = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    
   
`;

export const SwitchButton = styled(Switch)`
   
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 } // adicinar estilização dentro da listagem
})`
    width: 100%;

    position: absolute;

    margin-top: ${RFPercentage(20)}px;

    
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;  
    
    margin-top: ${(RFPercentage(8))}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 16px;
`;

export const TransactionList = styled.FlatList`

`;