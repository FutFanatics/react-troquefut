import React from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import IconProduct from "../componentsStyled/icon/iconproduct";

import SlidesProducts from "./slidesproducts";

interface OutOfDateModalProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  onRequestClose?: () => void;
  onClose: () => void; // Add this line to the interface
}

const OutOfDateModal: React.FC<OutOfDateModalProps> = ({
  isOpen,
  onRequestClose,
  onClose, 
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="c-modal_aceite">
      <div className="container d-flex flex-column align-items-center">
        <SH1 typeTitle="devolution-modal">Solicitação Concluída!</SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
          A sua solicitação de Devolução foi concluída. Qualquer problema ou
          inconsistência, entre em contato pelo <strong>site</strong>, pelo
          nosso <strong>SAC: (11)4858-3500 </strong>
          ou email de contato: <strong>contato@futfanatics.com.br </strong>
        </STextParagraph>
      </div>

      <Button typeButton="back"  onClick={onClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default OutOfDateModal;
