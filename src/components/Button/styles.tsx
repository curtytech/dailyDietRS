import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { theme } from '../../theme';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    /* flex: 1; */
    min-height: 56px;
    max-height: 56px;

    width: 370px;
    background-color: ${theme.colors.gray};

    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    padding: 15px;
    text-align: center;    
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.white};

`;
