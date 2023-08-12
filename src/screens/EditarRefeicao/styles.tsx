import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;  
  background-color: ${theme.colors.background};   
`;
export const Content = styled.View`
  flex: 1;  
  background-color: ${theme.colors.background};
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
`;


export const Label = styled.Text`
  margin-top: 20px;

  color: #000;
  font-size: ${theme.fontSizes.md}px;  
`;
export const ErrorMessage = styled.Text`
  color: ${theme.colors.darkred};
  font-size: ${theme.fontSizes.md}px;  
`;

