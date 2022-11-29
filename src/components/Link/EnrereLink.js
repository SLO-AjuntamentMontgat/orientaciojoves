import { EnrereL } from './Link.styles';
import enrere from '../../assets/enrere.png'

const EnrereLink = ({ to, ...props }) => <EnrereL {...props} to={process.env.PUBLIC_URL + to} ><img src={enrere} style={{ marginRight: '10px', position: 'relative', top: '2px' }} /> Enrere</EnrereL>;

export default EnrereLink;