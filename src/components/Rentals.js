

import React from 'react';
import './Rentals.css';
import winter from './pictures/pool2.jpg';
import vanzari1 from './pictures/vanzari1.jpg';
import luxury1 from './pictures/luxury1.jpg';
import luxury2 from './pictures/luxury2.jpg';
import living2 from './pictures/living2.jpg';
import studio5 from './pictures/studio6.jpg';
import studio4 from './pictures/studio4.jpg';

class Rentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showApartamenteDescription: false,
    };
    this.toggleApartamenteDescription = this.toggleApartamenteDescription.bind(this);
  }

  toggleApartamenteDescription() {
    this.setState((prevState) => ({
      showApartamenteDescription: !prevState.showApartamenteDescription,
    }));
  }

  render() {
    return (
      
      <div className="container">
        <div className="h-sales">Închirieri</div>
        <div id="apartamente">
        <div className="h3-sales">Apartamente</div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={winter} alt="Winter" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Raiul Urban</em></strong></p>
                Apartament de lux cu 4 camere, 130 mp.{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                  Situat într-o zonă centrală a orașului, acest apartament oferă un design modern și funcțional, 
                  amenajări interioare de cea mai înaltă calitate și o priveliște panoramică uimitoare asupra Parcului Central.
                   Cele 4 camere sunt spațioase și confortabile, ideale pentru a crea momente de relaxare și intimitate. 
                   Bucătăria complet utilată și modernă este perfectă pentru a pregăti mese delicioase și a 
                   savura momentele petrecute alături de cei dragi. 
                   În plus, apartamentul este dotat cu toate facilitățile moderne,
                    pentru a vă asigura confortul și bunăstarea.
                  

                </div>
              )}
            </div>
          </div></div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={vanzari1} alt="Vanzari1" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Oază de relaxare</em></strong></p>
                Apartament cu 3 camere, 100 mp.{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                  Cu siguranță vă veți îndrăgosti de "Oază de Relaxare" - 
                  Apartamentul cu 3 camere și o suprafață generoasă de 100mp, 
                  situat în centrul orașului Cluj-Napoca. Încă de la prima vedere, 
                  veți fi cucerit de eleganța și rafinamentul acestui apartament.
                  Luminos și aerisit, "Oază de Relaxare" are un design modern și funcțional, 
                  cu amenajări interioare de cea mai înaltă calitate. Cele 3 camere spațioase sunt perfecte 
                  pentru a crea momente de relaxare și intimitate, iar ferestrele mari permit luminii naturale 
                  să pătrundă în încăpere, creând o atmosferă primitoare.Bucătăria complet utilată și 
                  modernă este un loc minunat pentru a pregăti mese delicioase și a savura momentele 
                  petrecute alături de cei dragi. De asemenea, terasa apartamentului este un loc 
                  minunat pentru a petrece momente de liniște și relaxare, admirând priveliștea 
                  încântătoare a zonei.

                </div>
              )}
            </div>
          </div>
          </div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={luxury1} alt="Luxury1" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Heaven Green</em></strong></p>
                Apartament cu 2 camere, 80 mp.{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                   Un apartament spațios cu 2 camere și o suprafață de 80mp, situat
                   într-o zonă pitorească în localitatea Florești. 
                   Apartamentul oferă un design modern și funcțional, 
                   cu amenajări interioare de calitate superioară. 
                   Cele 2 camere sunt confortabile și luminoase, ideale pentru a petrece momente de relaxare și intimitate. 
                   Bucătăria complet utilată este perfectă pentru a pregăti mese delicioase și a petrece momente plăcute 
                   alături de cei dragi. Apartamentul este situat 
                  într-o zonă liniștită și plină de verdeață, oferind un mediu prielnic relaxării și recreerii.

                </div>
              )}
            </div>
          </div>
          </div>
        </div>

        <div id="garsoniere">
        <div className="h3-sales">Garsoniere</div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={studio5} alt="Studio5" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Serenity Grove</em></strong></p>
                Sofisticare și lux: studio de 40 mp cu vedere la mare{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                  Dacă sunteți în căutarea unui studio de lux cu o vedere superbă 
                  la mare, atunci această proprietate este alegerea perfectă pentru
                   dumneavoastră. Acest studio sofisticat este situat la etajul
                    superior al unui imobil exclusivist și oferă o vedere panoramică
                     la mare. Complet utilat și mobilat cu cele mai bune echipamente,
                      acest studio este ideal pentru cei care doresc 
                  să trăiască într-un mediu sofisticat și exclusivist.             

                </div>
              )}
            </div>
          </div></div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={living2} alt="living2" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Utopia Heights</em></strong></p>
                Experiența urbană perfectă: studio de 30 mp în inima orașului{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                  Acest studio compact, situat în centrul orașului, 
                  este locul ideal pentru a experimenta viața urbană.
                   Cu un design inteligent și utilități complete, acest
                    studio oferă tot ce aveți nevoie pentru a trăi confortabil 
                    și la prețuri accesibile. Perfect pentru cei care doresc 
                    să fie la doar câțiva pași de cele mai
                   bune restaurante, magazine și atracții din oraș.

                </div>
              )}
            </div>
          </div>
          </div>
          <div className="cards-container">
          <div className="card-sales">
            <img src={studio4} alt="Studio4" className="card-sales-img-top" />
            <div className="card-sales-body">
              <p
                className="card-sales-text"
                onClick={this.toggleApartamenteDescription}
              >
                <p><strong><em>Paradise Retreat</em></strong></p>
                Liniște și confort într-un studio modern de 45 mp{' '}
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                  Detalii
                </span>
              </p>
              {this.state.showApartamenteDescription && (
                <div className="expanded-description">
                    Descoperiți acest studio recent renovat, 
                    situat într-o zonă liniștită și plăcută a orașului.
                     Acest studio elegant și confortabil este complet utilat
                      și mobilat, oferind un mediu perfect pentru relaxare și 
                      odihnă. Ideal pentru tineri profesioniști sau studenți 
                    care doresc să trăiască într-un mediu liniștit și modern.
                </div>
              )}
            </div>
          </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Rentals;
