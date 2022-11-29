import { useEffect, useContext } from 'react';
import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import { AppContext } from '../app/Provider';
import back from '../assets/1.jpg';
import Link2 from '../components/Link/Link2';

const Init = () => {
    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, fitScreen: true, backgroundColor: '#F1D685' })
    }, []);

    return (
        <InnerContainer style={{ paddingBottom: 50 }}>
            <Title>Tens entre 16 i 29 anys?</Title>
            <PaddingContainer>
                <Links>
                    <Link2 to="/vius-mongat-i-tiana">sí</Link2>
                    <Link2 to="/posat-n-contacte-amb-nosaltres">no</Link2>

                </Links>
            </PaddingContainer>
            {/* <Mano2 /> */}
        </InnerContainer>
    )
}

export default Init