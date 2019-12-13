import React from "react";

const Button = (props) => {
  return (
    <a href={`/details${props.movieId}`}
      className={`button ${props.primary}`} 
      data-testid="btn-element">
      {props.text}
    </a>
  );
}

export default Button;