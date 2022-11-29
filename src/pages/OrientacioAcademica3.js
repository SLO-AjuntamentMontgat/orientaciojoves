import { InnerContainer, Title, Links, P2, TwoLinks, PaddingContainer, H2 } from '../app/styles';
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/8-orientacio-academica.jpg';
import RecursosOrientacioAcademica from "../components/Accordions/RecursosOrientacioAcademica";
import EnrereLink from '../components/Link/EnrereLink';
import { useNavigate } from 'react-router-dom';

const OrientacioAcademica3 = () => {
    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBE21' })
    }, []);

    return (
        <InnerContainer>
            <Title>Orientació Acadèmica</Title>
            <PaddingContainer>
                <H2>Coneix el mercat de treball</H2>
                <Links column={true}>
                    <a target="_blank" rel="noreferrer" href="https://www.informat.cat/explora/">Sectors professionals</a>
                    <P2>Programa Explora. In-forma’t</P2>
                    <a target="_blank" rel="noreferrer" href="https://www.informat.cat/enllaca/">Connecta’t a professionals del teu sector objectiu</a>
                    <P2>Programa Enllaça. In-forma’t</P2>
                    <a target="_blank" rel="noreferrer" href="https://www.educaweb.com/profesiones/">Diccionari de professions</a>
                    <P2>Educaweb</P2>
                    <a target="_blank" rel="noreferrer" href="https://descobreixocupacions.barcelonactiva.cat/?gInterfaceLanguage=ca">De les ocupacions que coneixes a les que no coneixes</a>
                    <P2>Barcelona Activa</P2>
                    <a target="_blank" rel="noreferrer" href="https://treball.barcelonactiva.cat/porta22/cat/mercat/cercador_ocupacions/index.jsp">Cercador d’ocupacions</a>
                    <P2>Barcelona Activa</P2>
                </Links>
                <RecursosOrientacioAcademica />
            </PaddingContainer>
            <ComeBack />

            {/* <Mano2 /> */}
        </InnerContainer>
    )
}

export default OrientacioAcademica3;