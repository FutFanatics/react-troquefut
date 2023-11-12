import React, { useState } from "react";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SspanText } from "../componentsStyled/Text";

interface ValidationProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const Validation: React.FC<ValidationProps> = ({ className }) => {

  return (
    <>
    <div className="col-md-6">
        <Box typeBox="login" className="d-flex flex-column" margin="32px 0px">
            <label>Login</label>
            <input type="text" placeholder="Insira seu e-mail ou CPF"></input>
        </Box>
        <Box typeBox="login" className="d-flex flex-column" margin="32px 0px">
            <label>Senha</label>
            <input type="text" placeholder="Insira sua senha"></input>
        </Box>
        <div className="d-flex justify-content-end">
            <SspanText fontSize="14px" color="#192c53" fontWeight={600} >Esqueci a senha</SspanText>
        </div>
        
        <Button margin="32px auto 0px auto" path="/order">Confirmar</Button>
    </div>
    </>
  );
};

export default Validation;