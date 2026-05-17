import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Travel destination background" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Explore the world with Travelo</h1>
          <p>
            Discover unforgettable trips, curated destinations, and hassle-free bookings.
            Start your next adventure with trusted travel planning and local experiences.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="destination">Your destination</label>
            <input id="destination" type="text" placeholder="e.g. Bali, Paris, Tokyo" />
          </div>
          <div className="container">
            <label htmlFor="checkin">Arrival date</label>
            <input id="checkin" type="date" />
          </div>
          <div className="container">
            <label htmlFor="checkout">Departure date</label>
            <input id="checkout" type="date" />
          </div>
          <button>Start your adventure</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: min(1200px, 100%);
    max-width: 1200px;
    padding: 0 2rem;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 18vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      width: 100%;
      max-width: 1080px;
      display: grid;
      grid-template-columns: repeat(4, minmax(180px, 1fr));
      gap: 1rem;
      background-color: #ffffffde;
      padding: 1rem;
      border-radius: 0.75rem;
      align-items: end;
      .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.5rem;
        min-width: 0;
        label {
          font-size: 1rem;
          color: #03045e;
          text-align: left;
        }
        input {
          width: 100%;
          min-height: 52px;
          background-color: rgba(255, 255, 255, 0.95);
          border: 1px solid #d7d7d7;
          border-radius: 0.5rem;
          padding: 0.95rem 1rem;
          color: #020617;
          text-align: left;
          &:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
          }
          &::placeholder {
            color: #8b8b8b;
          }
        }
      }
      button {
        min-height: 52px;
        padding: 0 1.5rem;
        cursor: pointer;
        border-radius: 0.6rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.08rem;
        transition: 0.3s ease-in-out;
        align-self: flex-end;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: auto;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1.6rem;
        }
        p {
          font-size: 0.95rem;
          padding: 1vw;
        }
      }
      .search {
        grid-template-columns: 1fr;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
