import React from 'react';
import { Link } from 'react-router-dom';
import backwall2 from '../backwall2.jpg';

const Home = () => {
  return (
    <div style={styles.home}>
      <div style={styles.backwall}>
        <h1 style={styles.heading}>REDUCE THE <span style={styles.highlight}>ACCIDENTS</span></h1>
        <Link to="/fault" style={styles.button}>Go to Fault Detection</Link>
      </div>
    </div>
  );
};

const styles = {
  home: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  backwall: {
    backgroundImage: `url(${backwall2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',  // Align children to the start
    alignItems: 'center',
    margin: 0,
    padding: '10px 10px', // Adjust the top padding to move the content down
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 4px #000000',
    marginTop: '40px', // Add margin to move the heading down slightly
  },
  highlight: {
    color: 'red',
  },
  button: {
    marginTop: '0px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'red',
    textDecoration: 'none',
    borderRadius: '5px',
  }
};

export default Home;
