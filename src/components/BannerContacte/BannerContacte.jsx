import { Row, Box2 } from './BannerContacte.styles';
import Call from './img/call.svg';
import Facebook from './img/facebook.png';
import Send from './img/send.svg';
import Global from './img/global.svg';

const BannerContacte = (props) => (
  <>
    <Row style={{ marginTop: '10px' }}>
      <div>
        <img src={Call} />
        <p>Demana cita prèvia trucant al</p>
        <p><a href="tel:+34934690737">93 469 07 37</a></p>
      </div>

      <div>
        <img src={Send} />
        <p>O envia’ns un correu</p>
        <p><a href="mailto:mgt.treball@montgat.cat">mgt.treball@montgat.cat</a></p>
      </div>




      <div>
        <img src={Global} />

        <p>Més informació a</p>
        <p> <a href="https://www.montgat.cat" target="_blank">www.montgat.cat</a></p>
      </div>

      <div>
        <img src={Facebook} alt="" />
        <p>Segueix-nos a Facebook!</p>
        <p>@promocio.economicamontgat</p>
      </div>
    </Row >
  </>

);


export default BannerContacte;
