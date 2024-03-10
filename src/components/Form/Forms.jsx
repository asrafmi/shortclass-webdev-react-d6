import React, { useState } from 'react';
import './Forms.css';

function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registrasi Berhasil! \nNama: ${name} \nEmail: ${email}`);
  };

  const handleChangeName = (e) => {
    console.log('e', e.target.value);
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          value={name}
          onChange={handleChangeName}
          id="Name"
          type="text"
          placeholder="Name"
        />
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          onChange={handleChangeEmail}
          id="Email"
          type="text"
          placeholder="Email"
        />
        <label htmlFor="Password">Password</label>
        <input id="Password" type="text" placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Forms;
