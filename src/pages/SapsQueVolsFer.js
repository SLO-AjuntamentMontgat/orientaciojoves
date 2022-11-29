import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link1 from "../components/Link/Link1";
import { useEffect, useContext } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/3-estas-fet-alguna-formacio.jpg';

const SapsQueVolFer = () => {

    const [, setState] = useContext(AppContext);

    useEffect(() => {
        setState({ back, backgroundColor: '#01BEE8' })
    }, []);


    return (
        <InnerContainer>
            <Title>Saps què vols fer quan acabis el curs que estàs fent?</Title>
            <PaddingContainer>
                <Links column={true}>
                    <Link1 to="/saps-que-vols-estudiar">Sí, seguir estudiant</Link1>
                    <Link1 to="/no-t-agobiis">Encara no ho sé</Link1>
                    <Link1 to="/tens-clar-quina-feina-cerques">Treballar</Link1>
                    <Link1 to="/derivacio-a-altres-serveis">Altres</Link1>
                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano3 /> */}
        </InnerContainer>
    )
}

export default SapsQueVolFer