import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ImgClique from "../img/icon/correios.png";
import React, { useState } from "react";
import ModalAceite from "./modalaceite";

interface CorreiosProps {
  className?: string;
}
const Correios: React.FC<CorreiosProps> = ({ className }) => {
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
          Você deverá levar o produto até uma agência dos Correios;
          </li>
          <li>
          Assim que aprovado, será enviado um código reverso para o seu e-mail.
          </li>
        </div>
        <Button typeButton="select" margin="0px auto" >
          Selecionar
        </Button>
      </Box>
    </>
  );
};
export default Correios;
