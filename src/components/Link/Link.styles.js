import styled from 'styled-components';
import { Link } from "react-router-dom";
import { mobile } from '../../app/styles';
export const TwoOptionsLink = styled(Link)`
    width:130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color:#485063;
    text-decoration: none;
    border-radius:100%;
    background-color: #f2c06c;
    text-align: center;
    transition: 0.8s;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: bolder;
    &:hover{
        background-color: pink;
    }
    ${mobile}{
        width:60px;
        height:60px;
            font-size: 20px;

    }
`
export const SeguentL = styled(Link)`
display: inline-block;
background-color: #BEB5FF;
border: 1px solid #6750FE;
color:#2F1CAC;
text-decoration: none;
padding:15px 50px 15px 50px;
border-radius:30px;
transition:0.5s;
&:hover{
background-color: #F3D784;
}
`;

export const EnrereL = styled(Link)`
color:white !important;
background-color: black;
padding:15px;
text-decoration: none;
transition: 0.5s;
border-radius: 7px;
&:hover{
    background-color: gray;
}
`;

export const L1 = styled(Link)`
display: block;
text-align: center;
transition: 0.5s;
&:hover{
    background-color: rgb(140, 119, 188);
    color:white;
}
/*
box-shadow:  inset 0 0 0 2px #f9057a;
&:hover:before{
        transition-delay: 0s, 0s, 0.25s;
}

&:hover:after{
        transition-delay: 0s, 0.25s, 0;
}

&:hover:before,&:hover:after{
    border-color: #08a7ad;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
}


&:before{
    border-bottom-width: 2px;
    border-left-width: 2px;
}
&::before,&:after{
border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
}
}
*/
`