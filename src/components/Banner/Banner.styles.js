import styled from 'styled-components';
import { mobile } from '../../app/styles';

export const Row = styled.div`
 background-color: white;
`;

export const InnerRow = styled.div`
 max-width: 1200px;
 padding: 10px 50px 10px 50px;
margin: auto;
 display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile}{
    img{
    height: 20px !important;
  }
  }
  img{
    height: 50px;
  }
`;
