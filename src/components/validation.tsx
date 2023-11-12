import React, { useState } from "react";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";

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
        <Box typeBox="login" className="d-flex flex-column">
            <label>Login</label>
            <input type="text" placeholder="Insira seu e-mail ou CPF"></input>
        </Box>
        <Box typeBox="login" className="d-flex flex-column">
            <label>Senha</label>
            <input type="text" placeholder="Insira sua senha"></input>
        </Box>

        <Button margin="44px auto 0px auto">Confirmar</Button>
    </div>
    </>
  );
};

export default Validation;