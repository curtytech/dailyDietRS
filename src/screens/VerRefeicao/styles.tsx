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


export const LabelRefeicao = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  color: ${theme.colors.darkgray};
  font-size: 30px;  
`;

export const LabelDate = styled.Text`
  margin-top: 20px;
  font-weight: bold;

  color: ${theme.colors.darkgray};
  font-size: ${theme.fontSizes.md}px;  
`;

export const LabelStatus = styled.View`

    flex-direction: row;

    gap: 5px;

    min-height: 40px;
    max-height: 40px;

    max-width: 150px;

    margin-top: 20px;
    background-color: ${theme.colors.lightgray};  
  
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`;
