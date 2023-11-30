import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box } from '../componentsStyled/Box';
import IconAdd from '../componentsStyled/icon/iconadd';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      onImageUpload(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: 'image/*',
  });

  const handleImageClick = () => {
    const inputElement = document.getElementById('fileInput') as HTMLInputElement;
    inputElement.click();
  };
  return (
    <Box typeBox='upload'>
      <div {...getRootProps()} className="image-upload-container">
        <input {...getInputProps()} id="fileInput" style={{ display: 'none' }} />
        <IconAdd width={60} onClick={handleImageClick} />
      </div>
    </Box>
  );
};

export default ImageUpload;
