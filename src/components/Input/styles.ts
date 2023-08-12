import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { theme } from "../../theme";
import MaskInput from 'react-native-mask-input';

export const Container = styled(TextInput)`
    flex: 1;
    
    min-height: 56px;
    max-height: 56px;

    border-style: solid;
    border-color: ${theme.colors.lightgray};    
    border-width: 1px;
    border-radius: 8px;
        
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.md}px;
    
    padding: 16px;

   
`;


