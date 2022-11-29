import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/3-estas-fet-alguna-formacio.jpg';


const EstasFetAlgunaFormacio = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#01BEE8' })
    }, []);

    return (
        <InnerContainer>
            <Title>Estàs fent alguna
                formació actualment?</Title>
            <PaddingContainer>
                <Links column={true}>
                    <Link to="/mentres-estudies">No, però vull formar-me i ja sé què vull estudiar</Link>
                    <Link to="/saps-que-vols-fer">Sí, estic estudiant</Link>
                    <Link to="/orientacio-academica">No, però vull estudiar i no sé el què</Link>
                    <Link to="/vols-treballar">No i no vull estudiar</Link>
                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default EstasFetAlgunaFormacio