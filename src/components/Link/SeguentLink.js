import { SeguentL } from './Link.styles';
import enrere from '../../assets/enrere.png'

const SeguentLink = ({ to, ...props }) => <SeguentL {...props} to={process.env.PUBLIC_URL + to} >Següent</SeguentL>;

export default SeguentLink;