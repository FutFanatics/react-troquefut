import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";

interface FormularioPessoalProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento: () => void;
}

const FormularioPessoal: React.FC<FormularioPessoalProps> = ({ className }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(""); 
  const [celular, setCelular] = useState(""); 
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [emailMatch, setEmailMatch] = useState(true); 

  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
  const dados = {
        nome,
        telefone,
        celular,
        email,
      };
      console.log('Dados:', dados);

      setNome('');
      setTelefone('');
      setCelular('');
      setEmail('');
    
      
    };

    if (email === confirmarEmail) {

      console.log("Formulário enviado com sucesso", email);
    } else {
      
      console.error("Os emails não correspondem");
    }

    const handleEmailChange = (valor: string) => {
      setEmail(valor);
      setEmailMatch(valor === confirmarEmail);
    };
  
    const handleConfirmarEmailChange = (valor: string) => {
      setConfirmarEmail(valor);
      setEmailMatch(email === valor);
    };
    
  console.log(setNome)
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="c-forms row justify-content-center">
          <div className="col-8">
              <CampoTexto
                label="Nome Completo"
                obrigatorio={true}
                placeholder="Seu nome"
                valor={nome}
                aoAlterado={(valor) => setNome(valor)}
                
            />
            <div className="d-flex justify-content-between data-tel">
            <CampoTexto
                label="Telefone"
                obrigatorio={true} 
                placeholder="Digite seu telefone" 
                valor={telefone}
                aoAlterado={(valor) => setTelefone(valor)} 
            />

            <CampoTexto
              label="Celular"
              obrigatorio={true}
              placeholder="Digite seu celular" 
              valor={celular}
              aoAlterado={(valor) => setCelular(valor)} 
              
            />
            </div>
            
            <CampoTexto
              label="Seu melhor email"
              obrigatorio={true}
              placeholder="Digite seu email" 
              valor={email}
              aoAlterado={(valor) => setEmail(valor)} 
              
            />

            <CampoTexto
              obrigatorio={true}
              placeholder="Confirme seu email" 
              valor={confirmarEmail}
              aoAlterado={handleConfirmarEmailChange}
              className={emailMatch ? "" : "email-nao-correspondente"} 
            />

          {!emailMatch && (
              <p className="data-error-message">Os emails não correspondem.</p>
            )}
          </div>
        </div>
        <Button type="submit" margin="32px auto 0px auto">
          Avançar
        </Button>
      </form>    
  </>
  );
};

export default FormularioPessoal;
