import React from "react";
// A reproducable cards which uses props to be entered at places



export default function ReusableCard({ ...props }) {
    return (
      <div className="ReusableCard fade-container">
        <h1 className="Heading">{props.heading}</h1>
        <p className="Paragraph">{props.paragraph}</p>
        <a href="">
          <p className="KnowMore">know more👈</p>
        </a>
        <img className="img" src={props.imgSrc} />
      </div>
    );
  }