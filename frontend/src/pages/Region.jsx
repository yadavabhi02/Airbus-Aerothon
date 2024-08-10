import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import fault from '../fault2.jpg';

const Region = () => {
  const [imageData, setImageData] = useState(null);
  const [description, setDescription] = useState('');

  const handleImageUpload = async (image) => {
    setImageData(image);

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await fetch('http://localhost:5000/detect2', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.description) {
        setDescription(result.description);
      } else {
        setDescription('No fault detected or an error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      setDescription('Error: Could not connect to the server.');
    }
  };

  return (
    <div style={styles.fault}>
      <div style={styles.uploadSection}>
        <ImageUpload onUpload={handleImageUpload} />
      </div>
      <div style={styles.resultSection}>
        {imageData && (
          <div style={styles.result}>
            <div style={styles.imageContainer}>
              <img src={URL.createObjectURL(imageData)} alt="Uploaded" style={styles.uploadedImage} />
            </div>
            <div style={styles.description}>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '85vh',
  },
  fault: {
    backgroundImage: `url(${fault})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: 'white',
    minHeight: '84vh',
    width: '98.6%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',  // Align children to the start
    alignItems: 'center',
    margin: 0,
    padding: '10px 10px',
    opacity: '100%',
    // Adjust the top padding to move the content down
  },
  uploadSection: {
    marginRight: '40px',
    padding: '60px',
  },
  resultSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  result: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  imageContainer: {
    marginRight: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
  uploadedImage: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
  },
  description: {
    color: '#fff',
    backgroundColor: '#333',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
};

export default Region;
