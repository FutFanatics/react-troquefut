import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import CardVale from "./cardvale";
import CardEstorno from "./cardestorno";
import { Box } from "../componentsStyled/Box";

interface ValeEstornoProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const ValeEstorno: React.FC<ValeEstornoProps> = ({ className }) => {    
  return (
    <>
      <div className="col-md-12 d-flex flex-column align-items-center">
        <div className="col-md-8">
          <STextParagraph fontSize="16px" fontWeight={400}>
          O <strong>Estorno</strong> será efetivado através do mesmo método de pagamento utilizado na hora da compra. Já o seu <strong>Estorno</strong>, será enviado diretamente para o e-mail cadastrado na Fut.
        </STextParagraph>
        </div>
      <div className="row justify-content-space-between mt-4">
      <div className="col-md-6">
          <SspanText color="#00DF5E" fontSize="15px" fontWeight={500}>Estorno</SspanText>
          <Box typeBox="estorno-content">
            <CardEstorno></CardEstorno>
          </Box>
        </div>
        <div className="col-md-6 col-vale" >
          <SspanText color="#00DF5E" fontSize="15px" fontWeight={500}>Vale compras</SspanText>
          <Box typeBox="estorno-content">
            <CardVale></CardVale>
          </Box>
        </div>
        
      
      </div>
      </div>
    </>
  );
};

export default ValeEstorno;
