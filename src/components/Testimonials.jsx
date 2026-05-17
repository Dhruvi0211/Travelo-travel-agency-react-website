import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/blog1.jpg";
import avatar2 from "../assets/blog2.jpg";
import avatar3 from "../assets/blog3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            "Travelo made booking our family holiday effortless. The hotel, the sights, and the support team were excellent from start to finish."
          </p>
          <div className="info">
            <img src={avatar1} alt="Ashley M." />
            <div className="details">
              <h4>Ashley M.</h4>
              <span>Family traveler, New York</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            "The curated destination recommendations were exactly what we needed. We discovered amazing places and had a seamless trip."
          </p>
          <div className="info">
            <img src={avatar2} alt="Samuel R." />
            <div className="details">
              <h4>Samuel R.</h4>
              <span>Adventure seeker, London</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            "Great value, flexible payment, and friendly travel advice. I’ll book again with Travelo for every vacation."
          </p>
          <div className="info">
            <img src={avatar3} alt="Nina K." />
            <div className="details">
              <h4>Nina K.</h4>
              <span>Business traveler, Sydney</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
