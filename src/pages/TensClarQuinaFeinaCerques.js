import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link2 from "../components/Link/Link2";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/3-estas-fet-alguna-formacio.jpg';

const TensClarQuinaFeinaCerques = () => {

    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#01BEE8' })
    }, []);

    return (
        <InnerContainer>
            <Title>Tens clar quina feina cerques?</Title>
            <PaddingContainer>
                <Links>
                    <Link2 to="/estas-preparat">sí</Link2>
                    <Link2 to="/orientacio-laboral">no</Link2>
                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano5 /> */}
        </InnerContainer>)
}

export default TensClarQuinaFeinaCerques