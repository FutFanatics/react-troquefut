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
  onRequestClose: () => void;
}

const ModalCamera: React.FC<ModalCameraProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
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
  console.log();
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
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
              <div className="item">
                <ImageUpload onImageUpload={handleImageUpload} />
              </div>
            </Slider>
          </div>
        </div>
        <Button typeButton="upload">Enviar fotos</Button>
      </div>

      <button onClick={onRequestClose} className="btn-close"></button>
    </Modal>
  );
};

export default ModalCamera;
