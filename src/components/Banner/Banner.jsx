import { InnerRow, Row } from './Banner.styles';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo-tiana.png';

const Banner = (props) => (
  <Row>
    <InnerRow>
      <img src={logo1} alt="" style={{ height: '30px' }} />
      <img src={logo4} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" style={{ height: '40px' }} />
    </InnerRow>
  </Row>
);

export default Banner;
