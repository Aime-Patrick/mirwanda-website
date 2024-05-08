import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { BsInstagram } from 'react-icons/bs';
import {FaTwitterSquare, FaLinkedin} from 'react-icons/fa';
function Team() {
  return (
    <>
    <Meta title ="Team" />
    <BreadCrumb title = "Team" />
    <div className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
    <div id='model1'>
        <h1 className='model-title'>Team</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={300} height={400} src='images/pazzo.jpg'/>
            <div className="description">
                <h1>NDAGIJIMANA AIME PATRICK</h1>
                <h2>CEO</h2>
                <p>
                I am here to Set strategic goals. Provide company-wide leadership
                </p>
                <div className="social-media">
                  <BsInstagram />
                  <FaLinkedin />
                  <FaTwitterSquare />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={300} height={400} src='images/Kwizera_irene.jpg'/>
            <div className="description">
                <h1>KWIZERA ISHIMWE IRENE</h1>
                <h2>SECRETARY</h2>
                <p>
                My work here is convening and providing administration for annual general meetings (AGMs)
                </p>
                <div className="social-media">
                  <BsInstagram />
                  <FaLinkedin />
                  <FaTwitterSquare />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={300} height={400} src='images/methuselem.jpg'/>
            <div className="description">
                <h1>MUNYANEZA METHUSELEM</h1>
                <h2>GM</h2>
                <p>
                I am here to oversee the online sales and presence of a retail company
                </p>
                <div className="social-media">
                  <BsInstagram />
                  <FaLinkedin />
                  <FaTwitterSquare />
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Team;
