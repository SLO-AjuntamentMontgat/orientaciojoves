import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmoothCollapse from 'react-smooth-collapse';
import { Row, FlexBehaviour } from '../BannerContacte/BannerContacte.styles';
import { Label } from './styles';

const RecursosOrientacioAcademica = () => {
    const [expanded, setExpanded] = useState(-1);

    return (
        <Row>


            <div>
                <Label className="hoverLink" title="Més informació" onClick={() => setExpanded(!expanded)}>Recursos d'orientació acadèmica ↓</Label>
                <SmoothCollapse expanded={!expanded}>
                    <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="http://queestudiar.gencat.cat/ca" target="_black">Estudiar a Catalunya</a></li>
                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://triaeducativa.gencat.cat/ca/inici/" target="_black">Tria educativa</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://jovecat.gencat.cat/ca/temes/educacio_i_formacio/index.html" target="_black">Jove.cat: Educació i formació</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://universitats.gencat.cat/ca/inici/" target="_black">Canal Universitats</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.unportal.cat/" target="_black">Unportal: El web d’educació superior a Catalunya</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.ensenyament.com/" target="_black">El Saló de l’Ensenyament</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.educaweb.cat/" target="_black">Educaweb</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="http://www.buxaweb.com/educacio/estudiants.htm" target="_black">Buxaweb: Recull de recursos per a estudiants</a></li>

                        <li><a style={{ paddingBottom: '7px', display: 'block', textDecoration: 'none' }} href="https://www.diba.cat/es/web/educacio/recursos/publica/publicacions/caminet" target="_black">Materials d'orientació professional: CamiNet (Diputació de Barcelona)</a></li>

                    </ul>
                </SmoothCollapse>



            </div>
            <FlexBehaviour>
                <Link className='hoverLink' to={process.env.PUBLIC_URL + '/orientacio-laboral-3'}>T'ajudem?</Link>

            </FlexBehaviour>
        </Row>

    );
};

export default RecursosOrientacioAcademica;