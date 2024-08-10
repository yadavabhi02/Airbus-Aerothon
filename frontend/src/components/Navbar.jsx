import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>FDS</div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/fault"  style={styles.link}>Fault Analyzer</Link>
        <Link to="/region" style={styles.link}>Defect Region Detector</Link>
        <Link style={styles.link}>About Us</Link>
        <Link style={styles.link}>Contact Us</Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '10px 20px',
    color: 'white',
    border: 'none',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
  }
};

export default Navbar;
