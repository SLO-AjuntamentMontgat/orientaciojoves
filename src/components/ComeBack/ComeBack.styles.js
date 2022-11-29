import styled from 'styled-components';
import Link from '../Link/Link1';
import { mobile } from '../../app/styles';
export const StyledEnrere = styled(Link)`
display: block;
margin: 0 auto;
color:#8c77bc;
text-align: center;
background-color: #cbffd1;
padding: 20px;
text-decoration: none;
letter-spacing: 0.3rem;
&:hover{
    background-color: pink;
}
${mobile}{
    margin-top:10px;
}
`;