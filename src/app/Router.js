import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Init from '../pages/Init';
import EinesICanals from '../pages/EinesICanals';
import EstasPreparatPerLaRecercaDeFeina from '../pages/EstasPreparatPerLaRecercaDeFeina';
import EstasFetAlgunaFormacio from '../pages/EstasFetAlgunaFormacio';
import OrientacioAcademica from '../pages/OrientacioAcademica';
import OrientacioLaboral from '../pages/OrientacioLaboral';
import PosatNContacteAmbElTeuSLO from '../pages/PosatNContacteAmbElTeuSLO';
import PosatNContacteAmbNosaltres from '../pages/PosatNContacteAmbNosaltres';
import SapsQueVolsFer from '../pages/SapsQueVolsFer';
import TensClarQuinaFeinaCerques from '../pages/TensClarQuinaFeinaCerques';
import ViusMongatITiana from '../pages/ViusMongatITiana';
import MentreEstudies from '../pages/MentreEstudies';
import DerivacioAAltresServeis from '../pages/DerivacioAAltresServeis';
import NoTAtabalis from '../pages/NoTAtabalis';
import SapsQueVolsEstudiar from '../pages/SapsQueVolsEstudiar';
import OrientacioAcademica2 from '../pages/OrientacioAcademica2';
import OrientacioAcademica3 from '../pages/OrientacioAcademica3';
import OrientacioLaboral3 from '../pages/OrientacioLaboral3';
import OrientacioLaboral2 from '../pages/OrientacioLaboral2';
import VolsTreballar from '../pages/VolsTreballar';


const RoutesList = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={500} exit={false} unmountOnExit>
                <Routes>
                    <Route path={process.env.PUBLIC_URL}>
                        <Route index element={<Init />} />
                        <Route path="vols-treballar" element={<VolsTreballar />} />


                        <Route path="eines-i-canals" element={<EinesICanals />} />
                        <Route path="estas-preparat" element={<EstasPreparatPerLaRecercaDeFeina />} />

                        <Route path="orientacio-academica" element={<OrientacioAcademica />} />

                        <Route path="orientacio-academica-2" element={<OrientacioAcademica2 />} />
                        <Route path="orientacio-academica-3" element={<OrientacioAcademica3 />} />

                        <Route path='orientacio-laboral' element={<OrientacioLaboral />} />

                        <Route path='orientacio-laboral-2' element={<OrientacioLaboral2 />} />

                        <Route path='orientacio-laboral-3' element={<OrientacioLaboral3 />} />


                        <Route path="posat-n-contacte-amb-el-teu-slo" element={<PosatNContacteAmbElTeuSLO />} />
                        <Route path="posat-n-contacte-amb-nosaltres" element={
                            <PosatNContacteAmbNosaltres />
                        } />
                        <Route path="saps-que-vols-fer" element={<SapsQueVolsFer />} />
                        <Route path="saps-que-vols-estudiar" element={<SapsQueVolsEstudiar />} />

                        <Route path="tens-clar-quina-feina-cerques" element={<TensClarQuinaFeinaCerques />} />
                        <Route path="vius-mongat-i-tiana" element={<ViusMongatITiana />} />
                        <Route path="estas-fet-alguna-formacio" element={<EstasFetAlgunaFormacio />} />
                        <Route path="mentres-estudies" element={<MentreEstudies />} />
                        <Route path="derivacio-a-altres-serveis" element={<DerivacioAAltresServeis />} />

                        <Route path="no-t-agobiis" element={<NoTAtabalis />} />



                        <Route path="*" element={<div>404</div>} />
                    </Route>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
};

const Router = () => (
    <BrowserRouter>
        <RoutesList />
    </BrowserRouter>
);

export default Router;