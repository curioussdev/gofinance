import { TextInput } from "react-native";
import styled from "styled-components/native";

import { RFValue} from "react-native-responsive-fontsize"

export const Container = styled(TextInput)`
    width: 100%;
    padding: 12px 18px;

    font-family: ${({theme}) => theme.fonts.regular };
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text_dark};
    background-color: ${({theme}) => theme.colors.shape};

    border-radius: 5px;
    margin-bottom: 20px;
`;



 