import React, { useState } from "react";
import { Box } from "../componentsStyled/Box";

interface PixProps {
  onDataUpdate: (data: any) => void;
  onValidationChange: (isValid: boolean) => void;
}

const Pix: React.FC<PixProps> = ({ onDataUpdate, onValidationChange }) => {
  const [tipoPix, setTipoPix] = useState<string | null>(null);
  const [chavePix, setChavePix] = useState("");

  const handleTipoPixChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPix = event.target.value;
    setTipoPix(selectedTipoPix);
    setChavePix("");

    onDataUpdate({
      tipoPix: selectedTipoPix,
      chavePix: "",
    });

    validarCamposPreenchidos(selectedTipoPix, "");
  };

  const handleChavePixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novaChavePix = event.target.value;
    setChavePix(novaChavePix);

    onDataUpdate({
      tipoPix,
      chavePix: novaChavePix,
    });

    validarCamposPreenchidos(tipoPix, novaChavePix);
  };

  const validarCamposPreenchidos = (tipoPix: string | null, chavePix: string) => {
    const camposPreenchidos = tipoPix !== null && chavePix.trim() !== "";
    onValidationChange(camposPreenchidos);
  };

  return (
    <div className={`col-md-8 col-12 d-flex flex-column mt-5`}>
      <Box typeBox="login" margin="0px">
        <label>Tipo de Pix</label>
        <select className="w-100" onChange={handleTipoPixChange}>
          <option>Selecione o tipo</option>
          <option>Celular</option>
          <option>CPF ou CNPJ</option>
          <option>Chave Aleatória</option>
          <option>E-mail</option>
        </select>
      </Box>
      <Box typeBox="login" className="d-flex flex-column" margin="32px 0px">
        <label>Chave PIX</label>
        <input
          type="text"
          placeholder="Insira a Chave PIX"
          value={chavePix}
          onChange={handleChavePixChange}
        />
      </Box>
    </div>
  );
};

export default Pix;
