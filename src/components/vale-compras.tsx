import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";
import CardVale from "./cardvale";

interface ValeComprasProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const ValeCompras: React.FC<ValeComprasProps> = ({ className }) => {    
  return (
    <>
      <div className="col-md-8">
      <STextParagraph fontSize="16px" fontWeight={400} padding="0px 64px">
        O seu <strong>Vale Compras</strong> será enviado diretamente
        para o e-mail cadastrado na Fut.
      </STextParagraph>
      <CardVale></CardVale>
      </div>
    </>
  );
};

export default ValeCompras;
