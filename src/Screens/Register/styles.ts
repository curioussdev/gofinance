import { RFValue } from 'react-native-responsive-fontsize';
import  styled from 'styled-components/native';

export const Container =  styled.View``;

export const Header = styled.View`
    background-color: ${({ theme}) => theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
`;

export const Title = styled.Text`
font-family: ${({ theme}) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.shape};

    font-size: ${RFValue(20)}px;
`;

