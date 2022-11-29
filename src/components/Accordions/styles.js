import styled from 'styled-components';
import { mobile } from '../../app/styles';

export const Label = styled.label`
    cursor: pointer;
color: blue;
display: inline-block;
${mobile}{
    display: block;
}
`;