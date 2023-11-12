import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import CardVale from "./cardvale";
import CardEstorno from "./cardestorno";
import { Box } from "../componentsStyled/Box";

interface BankDataProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const BankData: React.FC<BankDataProps> = ({ className }) => {    
  return (
    <>
      <div className="col-md-8 d-flex flex-column mt-1">
        <div className="row mt-3">
            <Box typeBox="login" margin="0px" className="col-md-6">
            <label>Banco</label>
            <select className="w-100">
              <option>Selecione o tipo</option>
            </select>
          </Box>
          <Box typeBox="login" margin="5px 0px 0px 0px" className="col-md-6">
            <label>CPF ou CNPJ</label>
            <input type="text" placeholder="Ex: 000.000.000-00"></input>
          </Box>
        </div>
        <div className="row mt-3">
            <Box typeBox="login" margin="0px" className="col-md-6">
            <label>Agência</label>
            <input type="text" placeholder="000-00"></input>
          </Box>
          <Box typeBox="login" margin="5px 0px 0px 0px" className="col-md-6">
            <label>Conta</label>
            <input type="text" placeholder="00.000-00"></input>
          </Box>
        </div>
        <Box typeBox="login" className="d-flex flex-column" margin="32px 0px 0px 0px">
          <label>Tipo de Conta</label>
          <div className="d-flex">
            <div className="d-flex box-radios">
            <input type="radio"></input>
            <label>Conta corrente</label>
          </div>
          <div className="d-flex box-radios">
            <input type="radio"></input>
            <label>Conta corrente</label>
          </div>
          </div>        
        </Box>
      </div>
    </>
  );
};

export default BankData;
