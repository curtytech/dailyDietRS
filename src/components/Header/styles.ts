import styled from "styled-components/native";
import { theme } from '../../theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.background};
    margin-top: 40px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

// export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
//     size: 32,
//     color: theme.colors.white
// }))`
// `;
