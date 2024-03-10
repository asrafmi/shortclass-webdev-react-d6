import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <div className="container">
      <img src={`https://ui-avatars.com/api/?name=${props.name}`} alt="" />
      <div>
        <h1>{props.name}</h1>
        <p>Umur: {props.umur}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  umur: PropTypes.number.isRequired,
};

export default User;
