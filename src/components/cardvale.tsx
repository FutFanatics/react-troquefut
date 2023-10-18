import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import IconCart from "../componentsStyled/icon/iconcart";
import IconPix from "../componentsStyled/icon/iconPix";
import IconBank from "../componentsStyled/icon/icobank";
import IconDisponivel from "../componentsStyled/icon/icondisponivel";
import IconVale from "../componentsStyled/icon/iconvale";

interface CardValeProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const CardVale: React.FC<CardValeProps> = ({ className }) => {

  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
          <Box className="flex-column d-flex align-items-center col-7 col-md-7" margin="0px">
            <IconDisponivel width={50}></IconDisponivel>
            <SspanText typeOption="reembolso" padding="12px 0px 0px 0px">Disponível em até 5 dias</SspanText>
            <SspanText typeOption="reembolso">úteis após a chegada</SspanText>
            <SspanText typeOption="reembolso">do produto na Fut</SspanText>
          </Box>
          <Box className="flex-column d-flex align-items-center col-5 col-md-5" margin="0px">
            <IconVale width={50}></IconVale>
            <SspanText typeOption="reembolso" padding="12px 0px 0px 0px">Válido em todo</SspanText>
            <SspanText typeOption="reembolso">o nosso site</SspanText>
          </Box>
      </div>
    </>
  );
};

export default CardVale;
