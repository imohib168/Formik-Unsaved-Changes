import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Home = () => {
  return (
    <main>
      <Header />

      <h4>
        Please click <Link to='profile-form'>here</Link> to fill your profile
        form
      </h4>
    </main>
  );
};

export default Home;
