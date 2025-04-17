import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 10px;
  shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ImgLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;