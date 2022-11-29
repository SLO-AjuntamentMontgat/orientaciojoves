import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/6-eines-i-canals.jpg';

const NoTAtabalis = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#FFBC33' })
    }, []);

    return (
        <InnerContainer>
            <Title>No t'atabalis! És normal que no sàpigues què vols fer. Aquí tens algunes idees...</Title>
            <PaddingContainer>
                <Links column={true}>
                    <Link to="/orientacio-academica">Contemplo la possibilitat de seguir formant-te</Link>
                    <Link to="/orientacio-laboral">Contemplo la possibilitat de començar a treballar</Link>
                    <Link to="/derivacio-a-altres-serveis">Altres</Link>
                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano2 /> */}
        </InnerContainer>
    )
}

export default NoTAtabalis;