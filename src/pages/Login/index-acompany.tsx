import React, { useState } from "react";
import IconFut from "../../componentsStyled/icon/iconfut";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";
import Header from "../../components/header";
import Validation from "../../components/validation";
import ValidationAcompany from "../../components/validationacompany";
import { STextParagraph } from "../../componentsStyled/Text";

interface LoginProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const LoginAcompany: React.FC<LoginProps> = ({ className }) => {

  return (
    <>
    <Header></Header>
    <div className="container container-login">
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <TroqueFut width={200} className="logo-troque"></TroqueFut>
            <STextParagraph margin="64px 0px 0px 0px" fontSize="16px" fontWeight={400}>
            Para acessar a plataforma, faça o login abaixo:
            </STextParagraph>
            <ValidationAcompany></ValidationAcompany>
        </div>
        
    </div>
    </>
  );
};

export default LoginAcompany;