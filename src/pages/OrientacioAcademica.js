import { useNavigate } from 'react-router-dom';
import { InnerContainer, Title, Links, H2, P2, TwoLinks, PaddingContainer } from "../app/styles";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/8-orientacio-academica.jpg';
import RecursosOrientacioAcademica from '../components/Accordions/RecursosOrientacioAcademica';
import EnrereLink from '../components/Link/EnrereLink';
import SeguentLink from '../components/Link/SeguentLink';

const OrientacioAcademica = () => {
    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBE21' })
    }, []);

    return (
        <InnerContainer>
            <Title>Orientació Acadèmica</Title>
            <PaddingContainer>
                <H2>1. Coneix-te a tu mateix/a</H2>
                <Links column={true}>
                    <a target="_blank" rel="noreferrer" href="https://ajuntament.barcelona.cat/joves/ca/canal/autoconeixement-i-presa-de-decisions">Autoconeixement i presa de decisions </a>
                    <P2>Informació Jove.  Ajuntament de Barcelona</P2>
                    <a target="_blank" rel="noreferrer" href="http://www.informat.cat/materials/">Materials d’orientació acadèmica </a>
                    <P2>Campanya In-forma’t. Departament de Joventut, a través del Centre d’Assessorament Acadèmic per a Joves (CAAJ) i els serveis infoJOVE Barcelona.</P2>
                    <a target="_blank" rel="noreferrer" href="https://triaeducativa.gencat.cat/ca/orientacio/">Test d'orientació acadèmica i professional </a>
                    <P2>Tria Educativa</P2>
                    <a target="_blank" rel="noreferrer" href="https://testinteressos.barcelonactiva.cat/?gInterfaceLanguage=ca">Test d’interessos professionals</a>
                    <P2>Barcelona Activa</P2>
                    <a target="_blank" rel="noreferrer" href="https://testinteressos.barcelonactiva.cat/?gInterfaceLanguage=ca">Test CLOE</a>
                    <P2>Servei Ocupació de Catalunya</P2>
                </Links>
                <RecursosOrientacioAcademica />
            </PaddingContainer>
            <TwoLinks>
                <EnrereLink enrere={true} onClick={() => navigate(-1)} />
                <SeguentLink to="/orientacio-academica-2" />
            </TwoLinks>
            {/* <Mano2 /> */}
        </InnerContainer>
    )
}

export default OrientacioAcademica