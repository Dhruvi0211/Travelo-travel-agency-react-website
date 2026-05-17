import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "A dynamic city-state known for luxury shopping, skyline views, and vibrant food culture.",
      cost: "38,800",
      duration: "Approx 2 nights",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Experience tropical beaches, authentic street food, and world-famous hospitality.",
      cost: "54,200",
      duration: "Approx 2 nights",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "The city of lights offers iconic landmarks, romantic streets, and cultural masterpieces.",
      cost: "45,500",
      duration: "Approx 2 nights",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "Adventure in dramatic landscapes, from fjords to mountains and coastal routes.",
      cost: "24,100",
      duration: "Approx 1 night",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Escape to turquoise lagoons, overwater villas, and breathtaking island luxury.",
      cost: "95,400",
      duration: "Approx 2 nights",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "Discover rich history, world-class museums, and vibrant urban experiences.",
      cost: "38,800",
      duration: "Approx 3 nights",
    },
  ];

  const packages = [
    {
      title: "The Weekend Break",
      description: "Perfect for fast city escapes and refreshing short getaways.",
    },
    {
      title: "The Package Holiday",
      description: "All-inclusive travel plans with flights, hotels, and experiences bundled together.",
    },
    {
      title: "The Group Tour",
      description: "Guided trips designed for families, friends, and small groups.",
    },
    {
      title: "Long Term Slow Travel",
      description: "Extended stays and immersive experiences for travelers who want to explore deeper.",
    },
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="package-intro">
        <p>{packages[active - 1].description}</p>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                key={pkg.title}
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div className={`destination ${active === index % packages.length + 1 ? "selected" : ""}`} key={destination.title}>
              <img src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="Amenity icon" />
                  <img src={info2} alt="Amenity icon" />
                  <img src={info3} alt="Amenity icon" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .package-intro {
    max-width: 800px;
    margin: 0 auto 1.5rem;
    text-align: center;
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      gap: 1rem;
      li {
        padding: 1rem 1.8rem;
        border-radius: 3rem;
        cursor: pointer;
        transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease;
        position: relative;
        color: #444;
        &:hover {
          transform: translateY(-3px);
          color: #8338ec;
        }
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -0.4rem;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 80%;
          height: 0.3rem;
          border-radius: 2rem;
          background: linear-gradient(90deg, #8338ec, #4361ee);
          transition: transform 0.25s ease;
        }
      }
      .active {
        color: #8338ec;
        background-color: #f5efff;
        box-shadow: rgba(131, 56, 236, 0.2) 0px 10px 30px;
        &::after {
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #f7f3ff;
      border-radius: 1.2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
      opacity: 0.95;
      &:hover {
        transform: translateY(-0.75rem);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 18px 30px;
      }
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .services {
          display: flex;
          gap: 0.5rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2.2rem;
            padding: 0.35rem 0.45rem;
          }
        }
      }
      .distance {
        display: flex;
        justify-content: space-between;
        color: #555;
      }
    }
    .selected {
      border: 2px solid #8338ec;
      background-color: #efe5ff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        flex-wrap: wrap;
        gap: 0.75rem;
        li {
          padding: 0.9rem 1rem;
          font-size: 0.95rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
