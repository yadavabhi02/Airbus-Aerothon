import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; Fault Detection System</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '1px 0',
    bottom: '0',
    width: '100%',
  }
};

export default Footer;
