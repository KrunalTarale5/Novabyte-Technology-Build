import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./HomePageCard.css";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    logo: "/agile.png",
    heading: "Agile Transformation",
    hoverText: "We provide the most Agile and functional IT design for companies and businesses worldwide.",
  },
  {
    id: 2,
    logo: "/consultingservice.png",
    heading: "IT Consulting Services",
    hoverText: "We provide highly skilled & enthusiastic tech team for consulting businesses worldwide.",
  },
  {
    id: 3,
    logo: "/wds.png",
    heading: "Web Development",
    hoverText: "Client-focused, customer-centric, creating website solutions that deliver tangible business results.",
  },
  {
    id: 4,
    logo: "/cloudcomputing.png",
    heading: "Cloud Computing Services",
    hoverText: "We offer a wide range of cloud computing services with IaaS, PaaS, and SaaS transformation of systems.",
  },
  {
    id: 5,
    logo: "/mobile.png",
    heading: "Android and iOS",
    hoverText: "We develop cutting-edge mobile apps for both Android and iOS platforms, ensuring seamless user experiences and robust performance.",
  },
  {
    id: 6,
    logo: "/Hosting2.png",
    heading: "Hosting",
    hoverText: "Rather than hosting a website on a single machine, cloud computing allows us to distribute data over a large geographical area.",
  },
  {
    id: 7,
    logo: "/webdesigning.png",
    heading: "Web Design",
    hoverText: "Our team brings your ideas to life with our web designs that you can think, and grow your online presence all from one powerful platform.",
  },
  {
    id: 8,
    logo: "/serversupport.png",
    heading: "Server Support",
    hoverText: "Servers are the lifeblood of any business. This is where our critical information is stored and accessed through our computer network systems.",
  },
];

const HomePageCard = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const onClickHandler = (id) => {
    const routes = {
      1: "/service/agiletransformation",
      2: "/service/Itservice",
      3: "/service/webDevelopment",
      4: "/service/CloudComputing",
      5: "/service/AndroidandIOS",
      6: "/service/Hosting",
      7: "/service/WebDesing",
      8: "/service/ServerSupport",
    };
    navigate(routes[id]);
  };

  return (
    <Container>
      <Row className="home">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="co-card"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClickHandler(card.id)}
          >
            <img src={card.logo} className="card-logo" alt={`Logo ${card.id}`} />
            <div className="co-card-content">
              <h3 className="font">{card.heading}</h3>
              <p className={`card-text ${index === hoverIndex ? "entering" : ""}`}>
                {index === hoverIndex ? card.hoverText : ""}
              </p>
              <span className="read-more">Read More &rarr;</span>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default HomePageCard;
