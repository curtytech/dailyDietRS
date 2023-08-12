import styled from "styled-components/native";
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    flex: 1;
    min-height: 56px;
    max-height: 110px;

    width: 370px;
    background-color: ${theme.colors.lightgreen};

    border-radius: 8px;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
`;

export const Title = styled.Text`
    text-align: center;    
    font-weight: bold;
    font-size: 45px;
    color: ${theme.colors.gray};
`;

export const SubTitle = styled.Text`
    text-align: center;    
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.gray};
`;
