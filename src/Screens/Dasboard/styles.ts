import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; // Icon de logout da lib Feather
import { 
    RFPercentage,
     RFValue
} from 'react-native-responsive-fontsize'  // Traz a independencia de px em proporção as telas de diferentes dispositivos

export const Container = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.colors.background};

    
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: center;
    	
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;

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
    color: ${( { theme } ) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

`;

export const IconLogout = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;