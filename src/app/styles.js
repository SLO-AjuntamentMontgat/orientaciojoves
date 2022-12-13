import font from '../assets/fonts/ClashDisplay-Regular.otf';
import mano1 from '../assets/manos/movil-mano-1.png';
import mano2 from '../assets/manos/movil-mano-2.png';
import mano3 from '../assets/manos/movil-mano-3.png';
import mano4 from '../assets/manos/movil-mano-4.png';
import mano5 from '../assets/manos/movil-mano-5.png';

import styled, { createGlobalStyle, css } from 'styled-components'
const desktopStartWidth = 996;

export const desktop = `@media (min-width: ${desktopStartWidth}px)`;
export const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const OuterContainer = styled.div`
display: flex;
flex:1;
flex-direction: column;
justify-content: space-between;
background-size: ${({ fitScreen }) => fitScreen ? 'cover' : 'cover'};
background-attachment: fixed;
@media (orientation: landscape) {
background-size: cover !important;

}

background-position: center;

${mobile}{
background-position: right 90px;
background-repeat: no-repeat;
}
`;
export const Container = styled.div`
padding:25px;
display: flex;
flex:1;
${mobile}{
    align-items: flex-start;

}
`;

export const InnerContainer = styled.main`
background-color: white;
max-width: 800px;
margin: auto;
width: 100%;
position:relative;
box-shadow: 5px 5px 15px black;
& p{

  /* padding-left:25px;
  padding-right: 25px; */
}
${mobile}{
  margin: 0;

}
`

export const Title = styled.h1`
background-color: #8c77bc;
color: #c9ffd2;
text-align: left;
padding:70px 30px 50px 80px;
margin-top: 0;
//letter-spacing: 0.5rem;
font-size: 3rem;
${mobile}{
  padding:20px;
  font-size: 16px;


}
`;

export const Links = styled.div`
display: flex;
justify-content: space-around;
${({ column }) => column && css`
flex-direction: column;
a{
    margin-top:15px;
    display: block;
    text-align:center;
    text-decoration: none;
    border-radius:15px;
    border: 1px solid black;
    padding:15px;
    background-color: #BEB5FF;
    border:1px solid black;
    transition:1s;
    &:hover{
      background-color:#553FE8;
      color:white
    }

}

`}
`;

const manoCSS = css`
width: 350px;
position: absolute;
right: -250px;
bottom: -40px;
z-index:9999;
${mobile}{
 /*
  bottom:-500px;
  right:-200px
  */
  display:none
}
`;

export const Mano1 = styled.img.attrs({ src: mano1 })`
${manoCSS}
`;

export const Mano2 = styled.img.attrs({ src: mano2 })`
${manoCSS}
`;

export const Mano3 = styled.img.attrs({ src: mano3 })`
${manoCSS}
`;

export const Mano4 = styled.img.attrs({ src: mano4 })`
${manoCSS}
`;

export const Mano5 = styled.img.attrs({ src: mano5 })`
${manoCSS}
`;


export const H3 = styled.h3`
color:#6750FE;
text-transform: uppercase;
font-weight: bold;
/* padding-left:25px; */
`;

export const H2 = styled.h3`
color:#6750FE;
text-transform: uppercase;
font-weight: bold;
/* padding-left:25px; */
`;
export const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: face;
  src: url(${font});
} */
body{
    margin:0;
    overflow-x: hidden;
}

#root{
  height:100%;
  min-height: 100vh;
  display: flex;
}
*{
     font-family: 'Open Sans' !important;

}
.bold{
  font-weight: bold;
}
.center{
  text-align: center;
}
.fade-enter {
  opacity: 0;
  z-index: 1;
}
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-out;
}
.fade-exit {
  opacity: 1;
}
.fade-exit.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-out;
}
`

export const P2 = styled.p`
margin-top: 3px;
margin-bottom: 0;
text-align: center;
font-size:0.8em;
`;

export const TwoLinks = styled.div`
display: flex;
justify-content: space-around;
margin-top:40px;
margin-bottom: 30px;
a{
  color:black;
}
`;

export const PaddingContainer = styled.div`
padding:0 40px 20px 40px;
${mobile}{
  padding:20px;
}
`;