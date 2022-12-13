import BannerContacte from "../BannerContacte";
import { Title, H3, InnerContainer } from "../../app/styles";
//import { Test } from './Tajudem.styles';

const Tajudem = (props) => (
  <>
    <H3>Orientació</H3>
    <ul>
      <li>Acadèmica i professional</li>
      <li>Projecte de negoci</li>
    </ul>
    <H3>Assessorament tècnic</H3>
    <ul>
      <li>Eines i estratègies per a la recerca de feina</li>
      <li>Viabilitat econòmica i financera de la teva idea empresarial</li>
    </ul>
    <H3>Formació</H3>
    <ul>
      <li>
        Competències transversals

      </li>
      <li>
        Competències tècniques
      </li>
      <li>
        Competències d’accés a l’ocupació

      </li>
    </ul>
    <H3>Ofertes de feina</H3>
    <BannerContacte />
  </>
);

export default Tajudem;
