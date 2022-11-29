import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/3-estas-fet-alguna-formacio.jpg';
import Link2 from "../components/Link/Link2";

const VolsTreballar = () => {

    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back })
    }, []);

    return (
        <InnerContainer>
            <Title>Vols treballar?</Title>
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

export default VolsTreballar;