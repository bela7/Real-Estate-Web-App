import React, { Component } from 'react';
import './Contact.css';
import bedroomImg from './pictures/bedroom.jpg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      showThanksMessage: false,
    };
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url(${bedroomImg})`;
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = 'none';
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showThanksMessage: true,
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, email, message, showThanksMessage } = this.state;

    return (
      <div className="contact-container">
        <h1>Contact</h1>
        {showThanksMessage && <p>Mulțumim pentru solicitarea ta. Vom reveni la tine cât mai curând posibil!</p>}
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nume:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={this.handleChange} required />

          <label htmlFor="message">Mesaj:</label>
          <textarea id="message" name="message" rows="5" value={message} onChange={this.handleChange} required></textarea>

          <button type="submit" className="submit-button">Trimite mesaj</button>
        </form>
      </div>
    );
  }
}

export default Contact;
