import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

const MediaUploader = ({ onMediaChange }) => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');
    
    // Validate file type
    if (file.type.startsWith('image/')) {
        setMediaType('image');
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            onMediaChange({ type: 'image', file, preview: reader.result });
        };
        reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
        setMediaType('video');
        // Create temporary URL for video validation
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = function() {
            window.URL.revokeObjectURL(url);
            if (video.duration > 8) {
                setError('Video must be 8 seconds or less.');
                setPreview(null);
                setMediaType(null);
                onMediaChange(null);
            } else {
                setPreview(url); // Use blob URL for preview
                onMediaChange({ type: 'video', file, preview: url });
            }
        };
        video.src = url;
    } else {
        setError('Unsupported file type. Please upload an image or video.');
    }
  };

  const clearMedia = () => {
      setPreview(null);
      setMediaType(null);
      setError('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      onMediaChange(null);
  };

  return (
    <div className="media-uploader">
      <div className="uploader-box" onClick={() => fileInputRef.current.click()}>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*,video/*" 
            style={{ display: 'none' }} 
        />
        
        {!preview ? (
            <div className="upload-placeholder">
                <Upload size={32} />
                <p>Click to upload Image or Short Video (Max 8s)</p>
            </div>
        ) : (
            <div className="media-preview-container" onClick={(e) => e.stopPropagation()}>
                {mediaType === 'image' ? (
                    <img src={preview} alt="Preview" className="media-preview" />
                ) : (
                    <video src={preview} controls className="media-preview" />
                )}
                <button type="button" className="remove-btn" onClick={clearMedia}>
                    <X size={16} />
                </button>
            </div>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default MediaUploader;
