import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";

interface ModalDevolutionProps extends ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

interface ModalProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  describe?: React.ReactNode;
  className?: string;
}

const ModalDevolution: React.FC<ModalDevolutionProps> = ({
  isOpen,
  onRequestClose,
  title,
  subtitle,
  icon,
  describe,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className}`}
      
    >
      <div className="container d-flex flex-column align-items-center">
        <>{icon}</>
        <SH1 typeTitle="devolution-modal">{title}</SH1>
        <h2>
          {subtitle}
        </h2>
        <STextParagraph>
            {describe}
        </STextParagraph>
        
      </div>


      <Button typeButton="back" onClick={onRequestClose}>Voltar</Button>
    </Modal>
  );
};

export default ModalDevolution;
