import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
  /* background-color: #000; */
  background-color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`  
  margin-top: 20px;
  margin-bottom: 10px;
  
  color: #000;
  font-size: ${theme.fontSizes.sm}px;
  

`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: #000;
  /* background-color: ${theme.colors.background}; */
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const CountBanner = styled.View`
    flex: 1;
    min-height: 56px;
    max-height: 110px;

    width: 150px;
    /* background-color: ${theme.colors.lightgreen}; */

    border-radius: 8px;
    justify-content: center;
    align-items: center;

    /* margin-top: 50px; */
`;