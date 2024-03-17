import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa0 ma4 bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 className = "f4">{name}</h2>
        <p className = "f5">{email}</p>
      </div>
    </div>
  );
}
//its changed
export default Card;