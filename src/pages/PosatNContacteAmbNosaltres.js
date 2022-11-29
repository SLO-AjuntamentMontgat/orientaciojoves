import { Title, H3, InnerContainer, PaddingContainer } from "../app/styles";
import BannerContacte from "../components/BannerContacte";
import ComeBack from "../components/ComeBack";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/4-posat-n-contacte-amb-nosaltres.jpg';

const PosatNContacteAmbNosaltres = ({ history }) => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#FFEF54' })
    }, []);


    return (
        <InnerContainer>

            <Title>POSA'T en CONTACTE amb NOSALTRES</Title>
            <PaddingContainer>
                <p>Al Servei Local d’Ocupació de l’Ajuntament de Montgat t’acompanyem en el teu camí professional.</p>
                <H3>Orientació</H3>
                <ul>
                    <li>Acadèmica i professional</li>
                    <li>Projecte de negoci</li>
                </ul>
                <H3>Assessorament tècnic</H3>
                <ul>
                    <li>Eines i estratègies per a la recerca de feina</li>
                    <li>Viabilitat econòmica i financera de la teva idea empresarial</li>
                </ul>

                <H3>Formació</H3>
                <ul>
                    <li>
                        Competències transversals

                    </li>
                    <li>
                        Competències tècniques
                    </li>
                    <li>
                        Competències d’accés a l’ocupació

                    </li>
                </ul>
                <H3>Ofertes de feina:  Accés al web d’ofertes Xaloc</H3>
                <BannerContacte />
            </PaddingContainer>
            <ComeBack />
            {/* <Mano5 /> */}
        </InnerContainer>
    )
}

export default PosatNContacteAmbNosaltres