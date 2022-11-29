import { TwoOptionsLink } from './Link.styles';


const Link2 = ({ to, ...props }) => <TwoOptionsLink {...props} to={process.env.PUBLIC_URL + to} />;

export default Link2;