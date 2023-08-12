import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { theme } from '../../theme';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    width: 370px;    
    border-width: 1px;
    border-style: solid;

    border-radius: 8px;
    justify-content: center;
    align-items: center;

    margin-right: 10px;    
`;

export const Title = styled.Text`
    padding: 15px;
    text-align: center;    
    font-weight: bold;
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.black};
`;

// export const Icon = styled.Text`
//     padding: 20px;
//     font-size: ${theme.fontSizes.md}px;
// `;
