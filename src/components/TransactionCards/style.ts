import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'


interface TransactionProps  {
    type: 'positive' | 'negative'
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 10px;

    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${(RFValue(15))}px;
`; 
export const Amount = styled.Text<TransactionProps>`
    color: ${({ theme, type }) => 
    type === 'positive' ? theme.colors.success : theme.colors.attention};

    font-family: ${({ theme }) => theme.fonts.regular};

    font-size: ${(RFValue(20))}px;
    margin-top: 2px;
`; 
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`; 
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`; 
export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${(RFValue(20))}px;
    
`; 
export const CategoryName = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${(RFValue(15))}px;

    margin-left: 17px;
`; 
export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${(RFValue(15))}px;
`; 