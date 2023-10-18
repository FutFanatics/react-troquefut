import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import ImgClique from "../img/icon/cliqueretire.png";
import MapClique from "./mapclique";
import ModalAceite from "./modalaceite";
import React, { useState } from "react";
import ModalClique from "./modalclique";

interface CliqueRetireProps {
  className?: string;
}
const CliqueRetire: React.FC<CliqueRetireProps> = ({ className }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Box typeBox="envio" className="col-10 col-md-3">
        <img src={ImgClique} className="icon" />

        <div className="box-text">
          <li>
            Você deverá levar o produto até um locker de sua escolha;
          </li>
          <li>
            Assim que aprovado, você receberá um QR Code via e-mail para a devolução.
          </li>
        </div>
        <Button typeButton="select" margin="0px auto" onClick={openModal}>
          Selecionar
        </Button>
        <ModalClique
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        ></ModalClique>
      </Box>
    </>
  );
};
export default CliqueRetire;
