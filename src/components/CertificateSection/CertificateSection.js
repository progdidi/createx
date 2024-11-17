import './certificateSection.scss';

//images
import certificate from './certificate.png';
import br1 from './br1.svg';
import br2 from './br2.svg';
import br3 from './br3.svg';

const CertificateSection = () => {
    return ( 
        <section className="certificate">
        <div className="container">
            <div className="certificate__inner">
                <div className="certificate-info">
                    <h6 className="section-subtitle">Createx Certificate</h6>
                    <h2 className="section-title">Your expertise will be confirmed</h2>

                    <p className="certificate-info__text">We are accredited by international professional organizations and institutes:</p>

                    <div className="brands">
                        <img src={br1} alt="" className="brands__img" />
                        <img src={br2} alt="" className="brands__img" />
                        <img src={br3} alt="" className="brands__img" />
                    </div>
                </div>
                <div className="certificate-media"><img src={certificate} alt="" className="certificate-media__img" /></div>
            </div>
        </div>
    </section>
     );
}
 
export default CertificateSection;