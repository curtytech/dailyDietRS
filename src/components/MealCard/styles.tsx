import styled, { css } from "styled-components/native";
import { theme } from '../../theme';
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    width: 370px;
    flex-direction: row;
    justify-content: center;
    /* align-items: center;     */

    border-color: ${theme.colors.lightgray};    
    border-width: 2px;
    border-style: solid;
    border-radius: 8px;

    margin-top: 10px;
    /* margin-bottom: 12px; */
`;

export const Title = styled.Text`
    flex: 1;
    text-align: left;
    padding: 15px;
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.black};
   
`;

export const Hour = styled.Text`
    text-align: left;
    padding: 15px;
    
    font-weight: bold;
    font-size: ${theme.fontSizes.md}px;
    
    color: ${theme.colors.black};
    border-right-width: 2px;    
    border-style: solid;
    border-color: ${theme.colors.lightgray};    

   
`;

