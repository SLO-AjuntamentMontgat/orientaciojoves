import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmoothCollapse from 'react-smooth-collapse';
import { Row, FlexBehaviour } from '../BannerContacte/BannerContacte.styles';
import { Label } from './styles';

const RecursosOrientacioLaboral = ({ hideContactButton }) => {
    const [expanded, setExpanded] = useState(-1);

    return (
        <Row>
            <div>
                <Label className="hoverLink" title="Més informació" onClick={() => setExpanded(!expanded)}>Recursos d'orientació laboral ↓</Label>
                <SmoothCollapse expanded={!expanded}>
                    <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="http://queestudiar.gencat.cat/ca" target="_black">Servei d’Ocupació de Catalunya</a></li>
                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.sepe.es/HomeSepe/" target="blank">SEPE: Servicio Público de Empleo Estatal</a> </li>
                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="http://garantiajuvenil.gencat.cat/ca/inici" target="_blank" >Garantia Juvenil</a> </li>
                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.ccmaresme.cat/buscadorjove/roj/" target="_blank">Programa Referent d’Ocupació Juvenil del Maresme</a>
                        </li>

                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.salocupacio.com/" target="_blank">El Saló de l’Ocupació</a>
                        </li>

                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://acciosocial.org/que-fem/mapalaboral/" target="_blank">Mapalaboral: orientació laboral per a joves</a>
                        </li>
                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://treball.barcelonactiva.cat/porta22/cat/joves/joves.do" target="_blank">Barcelona Activa: Programes i serveis específics per a Joves</a>
                        </li>
                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://jovecat.gencat.cat/ca/temes/treball/index.html" target="_blank">Jove.cat: Treball</a>
                        </li>
                        <li>
                            <a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://edu365.cat/eso/economia/index.html" target="_blank">Edu365: Economia i emprenedoria</a>
                        </li>
                    </ul>
                </SmoothCollapse>



            </div>

            {
                !hideContactButton && (
                    <FlexBehaviour>
                        <Link className='hoverLink' to={process.env.PUBLIC_URL + '/orientacio-laboral-3'}>T'ajudem?</Link>
                    </FlexBehaviour>
                )
            }

        </Row>
    );
};

export default RecursosOrientacioLaboral;