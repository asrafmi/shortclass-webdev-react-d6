import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import User from './components/User/User';
import Forms from './components/Form/Forms';

function App() {
  const [count, setCount] = useState(0);

  const userData = [
    {
      id: 1,
      name: 'Zilla',
      umur: 20,
    },
    {
      id: 2,
      name: 'Anas',
      umur: 17,
    },
    {
      id: 3,
      name: 'Fathan',
      umur: 21,
    },
    {
      id: 4,
      name: 'Omar',
      umur: 20,
    },
    {
      id: 5,
      name: 'Bayu',
      umur: 17,
    },
    {
      id: 6,
      name: 'Asraf',
      umur: 22,
    },
  ];
  return (
    <>
      <div>
        {userData.map((user) => (
          <User key={user.id} name={user.name} umur={user.umur} />
        ))}
        <hr />
        <Forms />
      </div>
    </>
  );
}

export default App;
