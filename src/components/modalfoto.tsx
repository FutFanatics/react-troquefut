import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import IconClose from "../componentsStyled/icon/Iconclose";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import TipoFotos from "./tipofotos";
import ImageUpload from "./imageupload";
import Button from "../componentsStyled/Button";
import Slider from "react-slick";

interface ModalCameraProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onPhotoAdded: () => void;
  onRequestClose: () => void;
  dadosSelecionados:any
}

const ModalCamera: React.FC<ModalCameraProps> = ({
  isOpen,
  onRequestClose,
  dadosSelecionados
}) => {

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const handleImageUpload = (file: File, index: number) => {
    const updatedImages = [...uploadedImages];
    updatedImages[index - 1] = file;
    setUploadedImages(updatedImages);
  };
  const handleUploadButtonClick = async () => {

    console.log('uploadedImage', uploadedImages);
    
    try {
      if (uploadedImages.length > 0) {

        const formData = new FormData();
  
        uploadedImages.forEach(async (file, index) => {
          formData.append(
            `evidences[${dadosSelecionados.variantId}-${dadosSelecionados.productId}][${index}]`,
            file
          );

          const auth = localStorage.getItem("auth");

          if (auth) {
            const authObj = JSON.parse(auth);
            const username = authObj.email;
            const password = authObj.token;
            const basicAuth = btoa(`${username}:${password}`);
    
            const response = await fetch(
              "https://api.troquefuthomologacao.futfanatics.com.br/api/evidences",
              {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: `Basic ${basicAuth}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
    
            if (!response.ok) {

              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              console.log("Success:", data);
            } else {
              console.log("Success:", response);
            }
    
            onRequestClose();
          }
        });
  
        
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="c-modal_foto"
    >
      <div className="container">
        <IconCamera
          width={50}
          fill="#192C53"
          className="icon-camera"
        ></IconCamera>
        <SH1 fontSize="22px" margin="8px 0px 16px 0px">
          Anexar Fotos do Produto
        </SH1>

        <STextParagraph fontSize="17px">
          Para garantir a qualidade das fotos anexadas, selecione abaixo o
        </STextParagraph>

        <STextParagraph fontSize="17px" padding="8px 0px 0px 0px">
          tipo de produto que está devolvendo e siga as instruções
        </STextParagraph>
        <div className="row justify-content-center">
          <TipoFotos></TipoFotos>
          <div className="col-md-8">
            <Slider {...settings}>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} index={1} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} index={2} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} index={3} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} index={4} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} index={5} />
              </div>
            </Slider>
          </div>
        </div>
        <Button typeButton="upload" onClick={handleUploadButtonClick}>Enviar fotos</Button>
      </div>

      <button onClick={onRequestClose} className="btn-close"></button>
    </Modal>
  );
};

export default ModalCamera;
