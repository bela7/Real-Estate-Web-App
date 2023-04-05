import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './News.css';
import news1 from './pictures/news1.jpg';
import news2 from './pictures/news2.jpg';
import news3 from './pictures/news3.jpg';

const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Piața imobiliară din România își menține trendul ascendent',
      image: news1,
      description: 'Prețurile proprietăților continuă să crească în majoritatea orașelor din România, pe fondul cererii ridicate din partea investitorilor și a cumpărătorilor. Aceasta este o veste bună pentru proprietarii care doresc să-și vândă proprietățile, dar poate fi o provocare pentru cei care doresc să cumpere.',
      showDetails: false,
    },
    {
      id: 2,
      title: 'Imobiliarele de lux sunt în creștere în București',
      image: news2,
      description: 'Interesul pentru proprietățile de lux în București a crescut semnificativ în ultimii ani, iar piața imobiliară de lux este în plină expansiune. Acest lucru se datorează în parte creșterii economice și a numărului de investitori străini care doresc să investească în proprietăți de top în București.',
      showDetails: false,
    },
    {
      id: 3,
      title: 'Noile tehnologii transformă modul în care cumpărăm și vindem proprietăți',
      image: news3,
      description: 'Tehnologia a adus schimbări semnificative în industria imobiliară, cu o mulțime de noi platforme și aplicații care facilitează procesul de cumpărare și vânzare a proprietăților. Aceste noi tehnologii includ drone pentru fotografii și filmări aeriene, vizualizări virtuale și aplicații mobile pentru a găsi proprietăți în timp real.',
      showDetails: false,
    },
  ]);

  const toggleDetails = (id) => {
    setNews(
      news.map((item) => {
        if (item.id === id) {
          return { ...item, showDetails: !item.showDetails };
        }
        return item;
      }),
    );
  };

  return (
    <div className="news-page">
      <div className="news-container">
        <h2 className="title-news">Noutăți</h2>
        <Carousel>
          {news.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 news-image"
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption className="caption-bg">
                <h3>{item.title}</h3>
                <button onClick={() => toggleDetails(item.id)}>Detalii</button>
                {item.showDetails && <p>{item.description}</p>}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default News;