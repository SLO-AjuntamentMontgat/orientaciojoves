import { L1 } from "./Link.styles";



const Link1 = ({ to, ...props }) => <L1 {...props} to={process.env.PUBLIC_URL + to} />;

export default Link1;