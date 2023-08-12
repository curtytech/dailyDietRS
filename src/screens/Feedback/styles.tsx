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
  margin-bottom: 5px;
  

  font-weight: bold;
  font-size: 30px;

  `;
export const Subtitle = styled.Text`    
  font-size: ${theme.fontSizes.md}px;

  color: ${theme.colors.darkgray};
`;