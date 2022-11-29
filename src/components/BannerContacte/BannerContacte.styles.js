import styled from 'styled-components';
import { mobile, desktop } from '../../app/styles';
export const Row = styled.div`
 display: flex;
 justify-content: space-around;
 text-align: center;
 padding-top: 20px;
 padding-bottom: 20px;
 align-items: center;
 *{
   font-size: 14px;
 }
 p{
    margin-bottom: 0;
    margin-top: 0;
 }

 a:hover{
   color: #F3D784;
 }

 ${desktop}{
   &>div{
      flex:1;
   }
 }
 ${mobile}{
   flex-direction: column;
   align-items: stretch;
   row-gap: 42px;
   &>div{

    &>div{
    margin-left:auto;
    margin-right:auto;
      margin-bottom: 35px;
   }
   }
 }
`;


export const Box2 = styled.div`
text-align: center;
 padding-top: 20px;
 padding-bottom: 20px;
 p{
    margin: 0;
 }
`;


export const FlexBehaviour = styled.div`
align-self: flex-start;
${mobile}{
  align-self: stretch;
  margin-bottom: 20px;
}
`;