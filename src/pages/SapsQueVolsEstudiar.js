import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link2 from "../components/Link/Link2";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/3-estas-fet-alguna-formacio.jpg';

const SapsQueVolsEstudiar = () => {

    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#01BEE8' })
    }, []);

    return (
        <InnerContainer>
            <Title>Saps què vols estudiar?</Title>
            <PaddingContainer>
                <Links>
                    <Link2 to="/mentres-estudies">sí</Link2>
                    <Link2 to="/orientacio-academica">no</Link2>
                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default SapsQueVolsEstudiar;