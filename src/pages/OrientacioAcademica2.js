import { InnerContainer, Title, Links, P2, TwoLinks, PaddingContainer, H2 } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/8-orientacio-academica.jpg';
import RecursosOrientacioAcademica from "../components/Accordions/RecursosOrientacioAcademica";
import EnrereLink from '../components/Link/EnrereLink';
import { useNavigate } from 'react-router-dom';
import SeguentLink from '../components/Link/SeguentLink';

const OrientacioAcademica2 = () => {
    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBE21' })
    }, []);

    return (
        <InnerContainer>
            <Title>Orientació Acadèmica</Title>
            <PaddingContainer>
                <H2>Coneix els itineraris formatius que pots fer</H2>

                <Links column={true}>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=a5L6NDqPoGA">Què puc estudiar?</a>
                    <P2>Tria Educativa. Departament d’Educació</P2>
                    <a target="_blank" rel="noreferrer" href="https://triaeducativa.gencat.cat/ca/orientacio/itineraris/">Troba el teu itinerari</a>
                    <P2>Tria Educativa. Departament d’Educació</P2>
                    <a target="_blank" rel="noreferrer" href="http://www.informat.cat/recursos-audiovisuals/">Graus Universitaris i Cicles Formatius. In-forma’t</a>
                    <P2>Campanya In-forma’t. Departament de Joventut, a través del Centre d’Assessorament Acadèmic per a Joves (CAAJ) i els serveis infoJOVE Barcelona</P2>
                    <a target="_blank" rel="noreferrer" href="https://universitats.gencat.cat/ca/inici/">Cercador d'estudis de Canal Universitats</a>
                    <P2>Gencat. Generalitat de Catalunya</P2>
                    <a target="_blank" rel="noreferrer" href="https://www.unportal.cat/">Graus Universitaris, Màsters i Cicles Formatius. Unportal</a>
                    <P2>Unportal</P2>
                    <a target="_blank" rel="noreferrer" href="http://www.buxaweb.com/educacio/estudiants.htm#SISTEMA%20EDUCATIU">Recursos del món de l'educació i l'ensenyament secundari a Catalunya</a>
                    <P2>Buxaweb</P2>
                </Links>
                <RecursosOrientacioAcademica />
            </PaddingContainer>
            <TwoLinks>
                <EnrereLink enrere={true} onClick={() => navigate(-1)} />
                <SeguentLink to="/orientacio-academica-3" />
            </TwoLinks>
            {/* <Mano2 /> */}
        </InnerContainer>
    )
}

export default OrientacioAcademica2;