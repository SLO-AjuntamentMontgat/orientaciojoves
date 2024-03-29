import { InnerContainer, Title, Link, H3, PaddingContainer, H2 } from '../app/styles';
import ComeBack from "../components/ComeBack";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/7-derivacio-altres-serveis.jpg';

const DerivacioAAltresServeis = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#B3565E' })
    }, []);

    return (
        <InnerContainer>
            <Title>Derivació a altres serveis</Title>
            <PaddingContainer>
                <p className="bold">Sembla que ara mateix la teva necessitat no és l' orientació acadèmica ni laboral. Potser estàs pensant en...</p>

                <div style={{ border: '1px solid black' }}>
                    <ul>
                        <li>Rebre informació en relació amb els drets i recursos socials
                        </li>
                    </ul>

                    <p className="bold center">Contacta amb <a href="http://www.montgat.cat/serveis-i-tramits/cataleg-de-serveis/benestar-social-familia-gent-gran-i-politiques-digualtat/" target="_blank"> Benestar social, Família, Gent Gran i Polítiques d'Igualtat</a> de Montgat</p>
                    <p className="bold center">Contacta amb <a href="https://www.tiana.cat/serveis-i-tramits/oficines-municipals/serveis-socials.html" target="_blank">Serveis Socials</a> de Tiana</p>

                </div>

                <div style={{ border: '1px solid black' }}>
                    <ul>
                        <li>Resoldre dubtes relacionats amb la salut, els estudis reglats i no reglats, el lleure, voluntariat, la mobilitat a nivell nacional i internacional, l'habitatge i tots els aspectes relacionats amb la teva trajectòria vital.</li>
                        <li>Tramitar els carnets d'alberguista (jove, adult i familiar) que serveix per la Xarxa d'Albergs nacionals i internacionals i el Carnet ISIC (Estudiant Internacional).</li>
                        <li>Accedir a serveis i recursos formatius i de lleure i participar en la programació d’activitats (Cursos, tallers, formacions i activitats juvenils a l’ Espai Jove de Montgat i Tiana).</li>
                        <li>Participar a l’Estiu Jove de Montgat i Tiana.</li>
                        <li>Reservar una sala de l’Espai Jove.</li>
                        <li>Internet, hemeroteca, viatgeteca, biblioteca Juvenil i taulells d’intercanvi.</li>
                    </ul>
                    <p className="bold center">Contacta amb <a href="http://www.montgat.cat/serveis-i-tramits/cataleg-de-serveis/joventut/" target="_blank">Joventut</a> de Montgat</p>

                    <p className="bold center">
                        Contacta amb <a href="https://www.tiana.cat/adreces-i-telefons/punt-dinformacio-juvenil-pij-i-casal-de-joves.html">el Punt d’Informació Juvenil i Casal de Joves</a> de Tiana
                    </p>

                </div>

                <p>No has trobat encara el què buscaves? Consulta <a href="http://www.montgat.cat/serveis-i-tramits/cataleg-de-serveis/joventut/" target="_blank">aquí</a> el catàleg de serveis de l’Ajuntament de Montgat o el de l’Ajuntament de Tiana clicant <a href="https://www.tiana.cat/" target="_blank"> aquí</a>.</p>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default DerivacioAAltresServeis