import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import CardVale from "./cardvale";
import CardEstorno from "./cardestorno";
import { Box } from "../componentsStyled/Box";

interface PixProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const Pix: React.FC<PixProps> = ({ className }) => {    
  return (
    <>
      <div className="col-md-8 col-12 d-flex flex-column mt-5">
        <Box typeBox="login" margin="0px">
          <label>Tipo de Pix</label>
          <select className="w-100">
            <option>Selecione o tipo</option>
            <option>Celular</option>
            <option>CPF ou CNPJ</option>
            <option>Chave Aleatória</option>
            <option>E-mail</option>
          </select>
        </Box>
        <Box typeBox="login" className="d-flex flex-column" margin="32px 0px">
          <label>Chave PIX</label>
          <input type="text" placeholder="Insira a Chave PIX"></input>
        </Box>
      </div>
    </>
  );
};

export default Pix;
