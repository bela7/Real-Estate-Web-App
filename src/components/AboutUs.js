// AboutUs.js

import React, { useState } from 'react';
import './AboutUs.css';
import member1 from './pictures/team1.jpg';
import member2 from './pictures/team2.jpg';
import member3 from './pictures/team3.jpg';


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescriptions: [false, false, false],
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription(index) {
    this.setState((prevState) => {
      const newShowDescriptions = prevState.showDescriptions.slice();
      newShowDescriptions[index] = !newShowDescriptions[index];
      return { showDescriptions: newShowDescriptions };
    });
  }

  render() {
    const members = [
      {
        img: member1,
        name: 'Antonio Enache',
        description: 'Agent imobiliar cu o experiență de peste 10 ani în domeniul imobiliar, specializat în vânzări și închirieri de proprietăți de lux în București și în zonele învecinate. Antonio este cunoscut pentru abordarea sa personalizată față de fiecare client și pentru abilitatea sa de a obține cele mai bune prețuri pentru proprietățile sale.',
      },
      {
        img: member2,
        name: 'Delia Munteanu',
        description: 'Agent imobiliar cu o experiență de peste 5 ani în domeniul imobiliar, specializat în vânzarea și închirierea de proprietăți rezidențiale și comerciale în Cluj-Napoca și în zonele limitrofe. Delia este apreciată de clienții săi pentru abordarea sa amabilă și profesionistă, precum și pentru capacitatea sa de a găsi proprietăți care se potrivesc cu nevoile și bugetul fiecărui client.',
      },
      {
        img: member3,
        name: 'Mihai Vlad',
        description: ' Agent imobiliar cu o experiență de peste 7 ani în domeniul imobiliar, specializat în vânzarea și închirierea de proprietăți rezidențiale și comerciale în Timișoara și în zonele învecinate. Mihai este cunoscut pentru atenția sa la detalii și pentru abordarea sa orientată către client, ajutându-i să ia deciziile corecte în ceea ce privește proprietățile lor.',
      },
    ];

    return (
      <div className="aboutus-container">
        <div className="title-aboutus">Echipa My Dream</div>
        <div className="members-container">
        {members.map((member, index) => (
  <div className="member-card" key={index}>
    <img src={member.img} alt={member.name} className="member-img" />
    <div className="member-name">{member.name}</div>
    <div
      className="member-details"
      onClick={() => this.toggleDescription(index)}
    >
      Detalii
    </div>
    {this.state.showDescriptions[index] && (
      <div
        className="expanded-description"
        style={{ color: this.state.showDescriptions[index] ? 'white' : '' }} // Add this line
      >
        {member.description}
      </div>
    )}
  </div>
))}
        </div>
      </div>
    );
  }
}

export default AboutUs;
