import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconEnviado from "../componentsStyled/icon/Iconenviado";

interface ModalEnvioProps extends ModalProps {
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

const ModalEnvio: React.FC<ModalEnvioProps> = ({
  isOpen,
  onRequestClose,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className} flex-column`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconEnviado width={60}></IconEnviado>
        <SH1 typeTitle="devolution-modal">
          Em <strong className="yellow">Análise</strong>
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
          Sua solicitação está em processo de análise pelo nosso SAC. Aguarde
          por atualizações.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalEnvio;
