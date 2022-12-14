import { InnerContainer, Title, Links, H2, P2, TwoLinks, PaddingContainer } from "../app/styles";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/9-orientacio-laboral.jpg';
import { useNavigate } from "react-router-dom";
import RecursosOrientacioLaboral from "../components/Accordions/RecursosOrientacioLaboral";
import { Row } from "../components/BannerContacte/BannerContacte.styles";
import EnrereLink from "../components/Link/EnrereLink";
import SeguentLink from "../components/Link/SeguentLink";

const OrientacioLaboral = () => {
    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#01D1D5' })
    }, []);

    return (
        <InnerContainer>
            <Title>Orientació laboral</Title>
            <PaddingContainer>
                <H2>1. Coneix-te a tu mateix/a</H2>
                <Links column={true}>
                    <a target="_blank" rel="noreferrer" href="https://serveiocupacio.gencat.cat/ca/inici">Test CLOE</a>
                    <P2>Servei Ocupació de Catalunya</P2>
                    <a target="_blank" rel="noreferrer" href="http://mapalaboral.org/es/identifica.html">Identifica</a>
                    <P2>Mapa Laboral</P2>
                    <a target="_blank" rel="noreferrer" href="http://mapalaboral.org/es/explora.html">Explora</a>
                    <P2>Mapa Laboral</P2>
                    <a target="_blank" rel="noreferrer" href="https://www.educaweb.cat/orientacio/interessos-professionals/">Test d’interessos professionals</a>
                    <P2>Educaweb</P2>
                    <a target="_blank" rel="noreferrer" href="https://ejoventut.gencat.cat/web/.content/e-joventut/recursos/tipus_de_recurs/documentacio/fitxes_exteses/FE-Recull-Materials-Treball/arxius/Competencies-Format-instagram-.pdf">Com detecto les meves competències?</a>
                    <P2>E-Joventut</P2>
                    <a target="_blank" rel="noreferrer" href="https://ejoventut.gencat.cat/web/.content/e-joventut/recursos/tipus_de_recurs/documentacio/fitxes_exteses/FE-Recull-Materials-Treball/arxius/Motivacions-.pdf">La importància de les meves motivacions</a>
                    <P2>E-Joventut</P2>
                    <a target="_blank" rel="noreferrer" href="https://ejoventut.gencat.cat/web/.content/e-joventut/recursos/tipus_de_recurs/documentacio/fitxes_exteses/FE-Recull-Materials-Treball/arxius/Interessos.pdf">La importància dels meus interessos</a>
                    <P2>E-Joventut</P2>
                    <a target="_blank" rel="noreferrer" href="https://valorsdeltreball.barcelonactiva.cat/?gInterfaceLanguage=ca">Valors del treball</a>
                    <P2>Barcelona Activa</P2>
                </Links>

                <RecursosOrientacioLaboral />


            </PaddingContainer>
            <TwoLinks>
                <EnrereLink enrere={true} onClick={() => navigate(-1)} />

                <SeguentLink to="/orientacio-laboral-2" />
            </TwoLinks>
            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default OrientacioLaboral