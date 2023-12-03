import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate, useLocation } from "react-router-dom";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import IconData from "../componentsStyled/icon/Icondata";
import { Produto } from "./Types";

interface ModalDataProps {
  isOpen: boolean;
  onRequestClose: () => void;
  
}

const ModalData: React.FC<ModalDataProps> = ({
  isOpen,
  onRequestClose,
}) => {
  
  const location = useLocation();
  const [dadosSelecionados, setDadosSelecionados] = useState(
    location.state || {}
  );
  const navigate = useNavigate();
  console.log("Dados selecionados:", dadosSelecionados);
  useEffect(() => {
    setDadosSelecionados(location.state || {});
  }, [location.state]);

  const handleConfirmar = () => {
    console.log("Dados selecionados:", dadosSelecionados);
    navigate("/data", {
      state: dadosSelecionados,
    });

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconData width={60}></IconData>
        <SH1 typeTitle="devolution-modal">
          <strong className="bank">Dados Bancários</strong>
        </SH1>

        <STextParagraph color="#000" fontWeight={400} fontSize="12px">
          Os dados bancários aqui informados são de inteira responsabilidade do
          cliente. Dados divergentes podem acarretar em um prazo maior para a
          finalização do processo, desta forma, é de extrema importância a
          análise das informações antes de enviá-los.
        </STextParagraph>
        <Button typeButton="back" onClick={handleConfirmar}>
          Avançar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalData;
