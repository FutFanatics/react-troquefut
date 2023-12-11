import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box } from '../componentsStyled/Box';
import IconAdd from '../componentsStyled/icon/iconadd';

interface ImageUploadProps {
  onImageUpload: (file: File, index: number) => void;
  index: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, index }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      onImageUpload(selectedFile, index);

      // Display the dropped image
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    //@ts-ignore
    accept: 'image/*',
  });

  const handleImageClick = () => {
    const inputElement = document.getElementById(`fileInput-${index}`) as HTMLInputElement;
    inputElement.click();
  };

  return (
    <Box typeBox="upload">
      <div {...getRootProps()} className="image-upload-container">
        {imageSrc ? (
          <img src={imageSrc} alt="Uploaded" style={{ height: '100%' }} />
        ) : (
          <>
            <input {...getInputProps()} id={`fileInput-${index}`} style={{ display: 'none' }} name={`evidences[${index}]`} />
            <IconAdd width={60} onClick={handleImageClick} />
          </>
        )}
      </div>
    </Box>
  );
};

export default ImageUpload;
