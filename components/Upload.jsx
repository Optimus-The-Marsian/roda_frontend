import React, { useState, useRef } from 'react';
import axios from 'axios';

function Upload() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentenceData, setSentenceData] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setMessage('');
    setSentenceData(null);
    setAudioUrl(null);
    const file = e.target.files[0];
    if (file && !file.type.startsWith('audio/')) {
      setMessage('Invalid file type. Please upload an audio file.');
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current?.files[0];
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('audio', file);

    setLoading(true);
    setMessage('');
    setSentenceData(null);
    setAudioUrl(null);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Store the parsed sentences and audio URL
      setSentenceData(response.data.summary);  // Adjusted to extract the summary
      setAudioUrl(response.data.audio_url);    // Store the audio URL from the response
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error uploading file';
      setMessage(errorMessage);
      console.error(error);
    } finally {
      setLoading(false);
      fileInputRef.current.value = '';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Audio</h2>
      <form onSubmit={handleUpload}>
        <input 
          type="file" 
          accept="audio/*" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {loading && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <div className="spinner"></div>
          <p>Processing... Please wait.</p>
        </div>
      )}

      {sentenceData && (
        <div>
          <h3>Summary of the Audio:</h3>
          <pre>{JSON.stringify(sentenceData, null, 2)}</pre>
        </div>
      )}

      {audioUrl && (
        <div>
          <h3>Processed Audio:</h3>
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default Upload;
