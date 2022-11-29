import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link2 from "../components/Link/Link2";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/6-eines-i-canals.jpg';

const MentreEstudies = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBC33' })
    }, []);

    return (
        <InnerContainer>
            <Title>Mentre estudies, vols cercar feina  o pràctiques?</Title>
            <PaddingContainer>
                <Links>
                    <Link2 to="/tens-clar-quina-feina-cerques">sí</Link2>
                    <Link2 to="/derivacio-a-altres-serveis">no</Link2>

                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano5 /> */}
        </InnerContainer>
    )
}

export default MentreEstudies;