import { InnerContainer, Title, Link, H3, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/2-posat-n-contacte-amb-nosaltres-slo.jpg';

const PosatNContacteAmbElTeuSLO = () => {

    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#8474B5' })
    }, []);


    return (
        <InnerContainer>
            <Title>POSA’T EN CONTACTE AMB EL TEU SERVEI LOCAL D’OCUPACIÓ</Title>
            <PaddingContainer>
                <p>Els Serveis Locals d'Ocupació (SLO) són dispositius públics adscrits a ens locals en l'àmbit de la promoció econòmica que presten serveis a:</p>

                <ul>
                    <li>Persones en situació d'atur o en actiu que volen millorar les seves possibilitats d’accés al mercat de treball (formació, orientació,...)</li>
                    <li>Empreses que cerquen cobrir els seus llocs de treball</li>
                </ul>

                <H3>Com contactar amb els SLO?</H3>
                <p>Per contactar amb els Serveis Locals d'Ocupació de la província de Barcelona es pot consultar el directori que s'inclou a la publicació: <a href="https://www.diba.cat/documents/36150622/36294102/xaloc_new_opuscle_r3.pdf/e0e23ba2-1ffd-426a-bddc-acb6204743da" target="_blank" rel="noreferrer">La Xarxa de Serveis Locals d'Ocupació (XALOC)</a></p>

                <H3>El web de la Xarxa de Serveis Locals d'Ocupació</H3>
                <p>La Diputació de Barcelona a través de la Xarxa de Serveis Locals d'Ocupació posa a disposició de la ciutadania el portal web dels SLO. En aquest web es pot accedir a les ofertes de treball dels Serveis Locals d'Ocupació de la província de Barcelona i fer el seguiment personalitzat de l'estat de les autocandidatures de les persones que s'han presentat a una oferta de treball on line.</p>

                <p>Omple <a target="_blank" rel="noreferrer" href="https://formularis.diba.cat/diba/el/sollicitud-contacte-amb-servei-local-ocupacio">aquí</a> el formulari de contacte per donar-te d’alta a Xaloc a través del teu SLO del teu municipi.</p>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano4 /> */}
        </InnerContainer>
    )
}

export default PosatNContacteAmbElTeuSLO