import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";

interface FormularioAdressProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento: () => void;
}

const FormularioAdress: React.FC<FormularioAdressProps> = ({ className }) => {
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");


  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
  const dados = {
        cep,
        estado,
        cidade,
        bairro,
        endereco,
        numero,
        complemento,
      };
      console.log('Dados:', dados);

      setCep('');
      setEstado('');
      setCidade('');
      setBairro('');
      setEndereco('');
      setNumero('');
      setComplemento('');
    };


    
  console.log(setCep)
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="c-forms row justify-content-center">
          <div className="col-8">
            <div className="d-flex justify-content-between data-tel">
              <CampoTexto
                label="Cep"
                obrigatorio={true}
                placeholder="Digite seu CEP"
                valor={cep}
                aoAlterado={(valor) => setCep(valor)}
                
            />

            <CampoTexto
              label="Estado"
              obrigatorio={true}
              placeholder="estado" 
              valor={estado}
              aoAlterado={(valor) => setEstado(valor)} 
              
            />
            </div>
            
            <div className="d-flex justify-content-between data-tel">
              <CampoTexto
                label="Cidade"
                obrigatorio={true}
                placeholder="Digite sua Cidade"
                valor={cidade}
                aoAlterado={(valor) => setCidade(valor)}
                
            />

            <CampoTexto
              label="Bairro"
              obrigatorio={true}
              placeholder="Digite seu bairro" 
              valor={bairro}
              aoAlterado={(valor) => setBairro(valor)} 
              
            />
            </div>

            <CampoTexto
              label="Endereço"
              obrigatorio={true}
              placeholder="Digite seu endereço" 
              valor={endereco}
              aoAlterado={(valor) => setEndereco(valor)} 
              
            />

          <div className="d-flex justify-content-between data-tel">
              <CampoTexto
                label="Número"
                obrigatorio={true}
                placeholder="Digite o Número"
                valor={numero}
                aoAlterado={(valor) => setNumero(valor)}
                
              />

              <CampoTexto
                label="Complemento"
                obrigatorio={true}
                placeholder="Digite o complemento" 
                valor={complemento}
                aoAlterado={(valor) => setComplemento(valor)} 
                
              />
            </div>

          </div>
        </div>
        <Button type="submit" margin="32px auto 0px auto">
          Avançar
        </Button>
      </form>    
  </>
  );
};

export default FormularioAdress;
