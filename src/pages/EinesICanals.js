import { Title, H3, InnerContainer, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Tajudem from "../components/Tajudem/Tajudem";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/6-eines-i-canals.jpg';

const EinesICanals = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBC33' })
    }, []);

    return (
        <InnerContainer>

            <Title>Eines i canals de recerca de feina</Title>
            <PaddingContainer>
                <H3>El següent pas és preparar les eines amb les que cercaràs feina i saber quins canals faràs servir. Al Servei Local d’Ocupació t’ajudarem a:</H3>

                <ul>
                    <li> Conèixer i saber utilitzar els canals de recerca de feina per on circulen les ofertes que t’interessen</li>
                    <li> Dissenyar el teu pla d’acció de recerca de feina</li>
                    <li> Fer el teu currículum, carta de presentació, etc.</li>
                    <li> Preparar-te pels processos de selecció</li>

                </ul>
                <Tajudem />
            </PaddingContainer>
            <ComeBack />
            {/* <Mano4 /> */}
        </InnerContainer>)
}

export default EinesICanals