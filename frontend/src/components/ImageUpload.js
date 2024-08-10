import React, { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType !== 'image') {
        setError('Please select a valid image file.');
        setSelectedImage(null);
      } else if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size should be less than 5MB.');
        setSelectedImage(null);
      } else {
        setError('');
        setSelectedImage(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedImage) {
      setUploading(true);
      await onUpload(selectedImage);
      setUploading(false);
    }
  };

  return (
    <div className="image-upload">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={!selectedImage || uploading} style={styles.uploadButton}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  uploadButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'Red',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ImageUpload;
