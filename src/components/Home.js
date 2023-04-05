import React, { useEffect } from 'react';
import './Home.css';
import testimonialImg1 from './pictures/bedroom.jpg';
import testimonialImg2 from './pictures/woman1.jpg';
import testimonialImg3 from './pictures/man4.jpg';
import man4 from './pictures/man1.jpg';

const Acasa = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${testimonialImg1})`;

    return () => {
      document.body.style.backgroundImage = 'none';
    };
  }, []);

return (
  <div className="acasa-container">
  <div className="intro-section">
    <div className="intro-circle">
      <p>
        Povestea ta începe cu noi... Dacă vrei să îți găsești casa perfectă, 
        My Dream Home este alături de tine.
         Îți oferim o abordare personalizată și ne concentrăm pe nevoile tale. 
        Vei fi partenerul nostru de încredere și îți vom oferi soluții personalizate
         pentru a-ți îndeplini visul.
        </p>
      </div>
    </div>
    <div class="h2-home">
  <h2>Testimoniale</h2>
    </div>
    <div className="testimonial-wrapper">
      <img src={man4} alt="Client 1" className="testimonial-img" />
      <p>"Am lucrat cu My Dream Home pentru a-mi găsi prima casă, și am fost impresionat 
        de atenția și profesionalismul lor. Ei m-au ajutat să-mi găsesc casa perfectă într-un 
        timp scurt și au făcut întregul proces foarte ușor. Recomand cu încredere Casa Visurilor 
        oricui caută o agenție imobiliară dedicată și de încredere!" - Mario M.
</p>
    </div>
    <div className="testimonial-wrapper">
      <img src={testimonialImg2} alt="Client 2" className="testimonial-img" />
      <p>
      "Echipa de la My Dream Home m-a sprijinit în găsirea unei locuințe 
      pentru familia mea într-un cartier minunat. Ei au fost atenți la nevoile noastre și 
      ne-au oferit soluții potrivite pentru bugetul și stilul nostru de viață. 
      Sunt extrem de mulțumit de serviciile lor și aș colabora din nou cu ei fără să stau pe gânduri." - Cami T.
</p>
    </div>
    <div className="testimonial-wrapper">
      <img src={testimonialImg3} alt="Client 3" className="testimonial-img" />
      <p>
      "Am apelat la My Dream Home pentru a-mi vinde garsoniera și 
      am fost foarte mulțumit de rezultate. Ei au reușit să obțină un preț excelent într-un timp foarte scurt.
        Am apreciat transparența și  comunicarea constantă din partea echipei.
         Cu siguranță, voi lucra din nou cu My Dream Home în viitor!" - Ion P.</p>
    </div>
  </div>
);
};

export default Acasa;
