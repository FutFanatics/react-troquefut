import React, { useCallback, useState } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import { Box } from '../componentsStyled/Box';
import IconAdd from '../componentsStyled/icon/iconadd';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setUploadedImage(selectedFile);
      onImageUpload(selectedFile);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: 'image/*',
  });

  const handleImageClick = () => {
    // Use this function to trigger the input file dialog when the image is clicked
    const inputElement = document.getElementById('fileInput') as HTMLInputElement;
    inputElement.click();
  };

  return (
    <Box typeBox='upload'>
      <div {...getRootProps()} className="image-upload-container">
        <input {...getInputProps()} id="fileInput" style={{ display: 'none' }} />
        {uploadedImage ? (
          <img
            src={URL.createObjectURL(uploadedImage)}
            alt="Imagem selecionada"
            
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <IconAdd width={60}></IconAdd>
        )}
      </div>
    </Box>
  );
};

export default ImageUpload;
