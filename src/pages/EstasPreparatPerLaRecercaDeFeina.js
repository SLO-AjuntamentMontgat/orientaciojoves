import { InnerContainer, Title, Links, PaddingContainer } from "../app/styles";
import ComeBack from "../components/ComeBack";
import Link from "../components/Link/Link1";
import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../app/Provider';
import back from '../assets/5-estas-preparat-per-la-recerca.jpg';
import Link2 from '../components/Link/Link2';
import { TwoOptionsLink } from '../components/Link/Link.styles';

const EstasPreparatPerLaRecercaDeFeina = () => {

    const [, setState] = useContext(AppContext);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);

    useEffect(() => {
        setState({ back, backgroundColor: '#CEBBD7' })
    }, []);

    const enabled = check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9;

    return (
        <InnerContainer>
            <Title>ESTÀS PREPARAT/DA PER LA RECERCA DE FEINA?</Title>
            <PaddingContainer>
                <ul>
                    <p><input value={check1} type="checkbox" onChange={e => setCheck1(e.target.checked)} ></input>Sé quines són les meves prioritats laborals i els meus valors professionals</p>
                    <p><input value={check2} type="checkbox" onChange={e => setCheck2(e.target.checked)}></input>Soc conscient de les competències que tinc més desenvolupades i quines he de millorar</p>
                    <p><input value={check3} type="checkbox" onChange={e => setCheck3(e.target.checked)}></input>He definit el/s meu/s objectiu/s professional/s (curt, mitjà i a llarg termini)</p>
                    <p><input value={check4} type="checkbox" onChange={e => setCheck4(e.target.checked)}></input>Estic informat/da sobre el sector professional al que em vull dirigir</p>
                    <p><input value={check5} type="checkbox" onChange={e => setCheck5(e.target.checked)}></input>Conec i accepto les condicions de les ofertes a les que vull accedir</p>
                    <p><input value={check6} type="checkbox" onChange={e => setCheck6(e.target.checked)}></input>Conec els requisits que em demanaran per accedir a la meva ocupació objectiu</p>
                    <p><input value={check7} type="checkbox" onChange={e => setCheck7(e.target.checked)}></input>Compleixo tots els requisits per accedir a la meva ocupació objectiu (carnets, formacions, competències professionals demandades, experiència professional, etc.)</p>
                    <p><input value={check8} type="checkbox" onChange={e => setCheck8(e.target.checked)}></input>Sé com millorar el meu perfil professional per complir el meu objectiu (quina formació he de fer, quines competències he de treballar, quines accions he de fer per millorar la meva candidatura, etc.)</p>
                    <p><input value={check9} type="checkbox" onChange={e => setCheck9(e.target.checked)}></input>Sé a quines empreses m’agradaria treballar</p>
                </ul>
                <Links>


                    <TwoOptionsLink onClick={e => {
                        if (!enabled) {
                            e.preventDefault();
                            alert('Per accedir aquest contingut has de marcar totes les caselles');
                        }

                    }} to={`${process.env.PUBLIC_URL}/eines-i-canals`} style={!enabled ? { backgroundColor: 'gray' } : {}}>sí</TwoOptionsLink>
                    <Link2 to="/orientacio-laboral">no</Link2>


                </Links>
            </PaddingContainer>
            <ComeBack />
            {/* <Mano2 /> */}
        </InnerContainer >
    )
}

export default EstasPreparatPerLaRecercaDeFeina