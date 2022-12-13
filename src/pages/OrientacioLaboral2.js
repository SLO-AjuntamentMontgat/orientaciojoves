import { InnerContainer, Title, Links, H2, P2, TwoLinks, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/9-orientacio-laboral.jpg';
import RecursosOrientacioLaboral from "../components/Accordions/RecursosOrientacioLaboral";
import EnrereLink from '../components/Link/EnrereLink';
import { useNavigate } from 'react-router-dom';
import SeguentLink from '../components/Link/SeguentLink';

const OrientacioLaboral2 = () => {

    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#01D1D5' })
    }, []);


    return (
        <InnerContainer>
            <Title>Orientació laboral</Title>
            <PaddingContainer>
                <H2>2. Coneix el mercat de treball</H2>
                <Links column={true}>
                    <a target="_blank" rel="noreferrer" href="https://xaloc.diba.cat/de-que-puc-treballar">De què puc treballar</a>
                    <P2>Xaloc</P2>

                    <a href="http://www.cresalida.com/mapes-docupacio/" target="_blank">Mapes d'ocupació Cresàlida</a><P2>Cresàlida</P2>
                    <a href="https://www.manlleu.cat/ope/mapes.htm" target="_blank">Mapes d'ocupació OPE Manlleu</a><P2>OPE Manlleu</P2>


                    <a target="_blank" rel="noreferrer" href="http://www.informat.cat/explora/">Sectors professionals</a>
                    <P2>Programa Explora. In-forma’t</P2>

                    <a target="_blank" rel="noreferrer" href="http://www.informat.cat/enllaca/">Connecta’t a professionals del teu sector objectiu. In-forma’t</a>
                    <P2>Programa Enllaça</P2>

                    <a target="_blank" rel="noreferrer" href="https://www.educaweb.com/profesiones/">Diccionari de professions</a>
                    <P2>Educaweb</P2>

                    <a target="_blank" rel="noreferrer" href="https://descobreixocupacions.barcelonactiva.cat/?gInterfaceLanguage=ca">De les ocupacions que coneixes a les que no coneixes</a>
                    <P2>Barcelona Activa</P2>

                    <a target="_blank" rel="noreferrer" href="https://treball.barcelonactiva.cat/porta22/cat/mercat/cercador_ocupacions/index.jsp">Cercador d’ocupacions</a>
                    <P2>Barcelona Activa</P2>

                    <a target="_blank" rel="noreferrer" href="https://ejoventut.gencat.cat/web/.content/e-joventut/recursos/tipus_de_recurs/documentacio/fitxes_exteses/FE-Recull-Materials-Treball/arxius/ROP_04_Model_Productiu.pdf">Recursos per conèixer el model productiu</a>
                    <P2>E-Joventut</P2>

                    <a target="_blank" rel="noreferrer" href="https://observatoritreball.gencat.cat/ca/inici">Observatori de Treball</a>
                    <P2>Gencat. Generalitat de Catalunya</P2>

                </Links>
                <RecursosOrientacioLaboral />
            </PaddingContainer>
            <ComeBack />


            {/* <Mano3 /> */}
        </InnerContainer >
    )
}

export default OrientacioLaboral2;