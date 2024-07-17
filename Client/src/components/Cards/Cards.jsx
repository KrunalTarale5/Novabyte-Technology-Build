import React from 'react';
import './Cards.css';

const Cards = () => {
  const cardData = [
    {
      id: '1',
      image: '/image1.jpg',
      heading: 'Web Development',
      text: 'Web Development Excellence Crafting stunning and responsive websites to elevate your online presence.',
    },
    {
      id: '2',
      image: '/image5.jpg',
      heading: 'AI Solutions',
      text: 'AI-Powered Innovation Developing cutting-edge AI products to streamline operations and enhance user experiences.',
    },
    {
      id: '3',
      image: '/image4.jpg',
      heading: 'Research and Development',
      text: 'Pioneering Research Exploring new technologies to drive innovation and maintain a competitive edge.',
    },
    {
      id: '4',
      image: '/image11.jpg',
      heading: 'Mobile Development',
      text: 'Android & iOS Development Creating robust and user-friendly mobile applications tailored to your business needs.',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        {cardData.map((card) => (
          <div className="col-md-3 main-card" key={card.id}>
            <div className="card h-100 d-flex flex-row" id='card'>
              <img src={card.image} className="card-img-left" alt={`Card ${card.id}`} />
              <div className=" d-flex flex-column justify-content-between" id='second-card'>
                <div>
                  <p className="second-card1">{card.heading}</p>
                  <h5 className="card-title" id='card-title'>{card.text}</h5>
                </div>
                {/* <div className="arrow">→</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
