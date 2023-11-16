import React, { useState } from "react";
import { Box } from "../componentsStyled/Box";

interface PixProps {
  className?: string;
}

const Pix: React.FC<PixProps> = ({ className }) => {
  const [tipoPix, setTipoPix] = useState<string | null>(null);
  const [chavePix, setChavePix] = useState("");

  const handleTipoPixChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoPix(event.target.value);
    setChavePix("");
  };

  const renderInputField = () => {
    switch (tipoPix) {
      case "Celular":
        return (
          <input
            type="text"
            placeholder="(00) 00000-0000"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
            maxLength={14} 
          />
        );
      case "CPF ou CNPJ":
        return (
          <input
            type="text"
            placeholder="000.000.000-00 ou 00.000.000/0000-00"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
            maxLength={18} 
          />
        );
      case "Chave Aleatória":
        return (
          <input
            type="text"
            placeholder="Insira a Chave Aleatória"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
          />
        );
      case "E-mail":
        return (
          <input
            type="email"
            placeholder="Insira o endereço de e-mail"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
          />
        );
      default:
        return (
          <input
            type="text"
            placeholder="Insira a Chave PIX"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
          />
        );
    }
  };

  return (
    <div className={`col-md-8 col-12 d-flex flex-column mt-5 ${className}`}>
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
        {renderInputField()}
      </Box>
    </div>
  );
};

export default Pix;
