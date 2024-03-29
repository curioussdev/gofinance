import { RFValue } from 'react-native-responsive-fontsize';
import  styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container =  styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

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

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;

    width: 100%;

    padding: 24px;
`;

export const Fields = styled.View`

`;