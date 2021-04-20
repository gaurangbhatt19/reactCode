import React from 'react'
const Card = props => {
    return (
      <div className="card">
        <img
          src={props.image} alt="Avatar"style={{ width: "100%" }}/>
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.designation}</p>
           <div className="Buttons">{props.children}</div>
        </div>
      </div>
    )
}

export default Card
