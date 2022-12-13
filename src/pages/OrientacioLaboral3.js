import { InnerContainer, Title, Links, H2, P2, TwoLinks, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Tajudem from '../components/Tajudem';
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/9-orientacio-laboral.jpg';
import RecursosOrientacioLaboral from "../components/Accordions/RecursosOrientacioLaboral";
import { useNavigate } from 'react-router-dom';

const OrientacioLaboral3 = () => {

    const [, setState] = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setState({ back, backgroundColor: '#01D1D5' })
    }, []);


    return (
        <InnerContainer>
            <Title>Orientació laboral</Title>
            <PaddingContainer>
                <h1 style={{ marginTop: '0' }}>T'Ajudem?</h1>
                <p>Vine al Servei Local d'Ocupació de l'Ajuntament de Montgat!</p>
                <Tajudem />
                <RecursosOrientacioLaboral hideContactButton={true} />
            </PaddingContainer>

            <ComeBack />

            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default OrientacioLaboral3;