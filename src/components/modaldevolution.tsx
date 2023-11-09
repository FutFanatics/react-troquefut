import React, { useCallback, useState, useEffect } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";

interface ModalDevolutionProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

const ModalDevolution: React.FC<ModalDevolutionProps> = ({
  isOpen,
  onRequestClose,
}) => {
    const [devolution, setDevolution] = useState<any | null>();

    useEffect(() => {
      axios.get("http://localhost:5000/devolucao")
        .then((response) => {
          const devolutionWithId1 = response.data.find((item: any) => item.id === 1);
          setDevolution(devolutionWithId1);
        })
        .catch((error) => {
          console.error("Erro ao buscar a devolução:", error);
        });
    }, []);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="c-modal_devolution"
    >
      <div className="container">
        <SH1 fontSize="22px" margin="8px 0px 16px 0px">
        </SH1>
        {devolution ? (
          <div>
            <SH1 fontSize="22px" margin="8px 0px 16px 0px">
              {devolution.dados.titulo}
            </SH1>
            <div><img className="" src={devolution.dados.icon}></img></div>
            <div>{devolution.dados.subtitle}</div>
            <div>{devolution.dados.describe}</div>
          </div>
        ) : (
          <p>Carregando informações...</p>
        )}

        <Button typeButton="upload">Voltar</Button>
      </div>

      <button onClick={onRequestClose} className="btn-close"></button>
    </Modal>
  );
};

export default ModalDevolution;
