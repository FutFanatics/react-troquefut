import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";

interface FormularioBankProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const FormularioBank: React.FC<FormularioBankProps> = ({ className }) => {
    const [cep, setCep] = useState("");
    const [pix, setPix] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [banks, setBanks] = useState("");
    const [ag, setAg] = useState("");
    const [conta, setConta] = useState("");

    const [payment, setPayment] = React.useState <"pix" | "card"> ("pix");

    const handleNavigateToCartPayment = () => {
        setPayment('card')
     }
    const handleNavigateToPixPayment = () =>{
        setPayment('pix')
    }
    
  return (
    <>

        <div className="c-forms row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-center mb-4">
                <Button 
                typeButton="payment" 
                onClick={handleNavigateToPixPayment}
                className={payment === "pix" ? "active" : ""}
                >Pix</Button>
                <Button  
                typeButton="payment" 
                onClick={handleNavigateToCartPayment}
                className={payment === "card" ? "active" : ""}
                >Conta Bancária</Button>
            </div>

            {payment === "pix" &&(
            <>
            
                <CampoTexto
                label="Tipo do Pix"
                obrigatorio={true}
                placeholder="Selecione o tipo"
                valor={cep}
                aoAlterado={(valor) => setCep(valor)}
                
            />

            <CampoTexto
              label="Chave PIX"
              obrigatorio={true}
              placeholder="Insira a Chave PIX" 
              valor={pix}
              aoAlterado={(valor) => setPix(valor)} 
              
            />  
            
            </>
                
            )} 

            {payment === "card" &&(
            <>
                <div className="d-md-flex justify-content-between data-tel">
                    
                <CampoTexto
                    label="Banco"
                    obrigatorio={true} 
                    placeholder="Selecione o banco" 
                    valor={banks}
                    aoAlterado={(valor) => setBanks(valor)} 
                />

                <CampoTexto
                label="CPF ou CNPJ"
                obrigatorio={true}
                placeholder="Ex: 000.000.000-00" 
                valor={cnpj}
                aoAlterado={(valor) => setCnpj(valor)} 
                
                />
                </div>
                <div className="d-flex justify-content-between data-tel">
                    
                <CampoTexto
                    label="Agencia"
                    obrigatorio={true} 
                    placeholder="Selecione o banco" 
                    valor={ag}
                    aoAlterado={(valor) => setAg(valor)} 
                />

                <CampoTexto
                label="Conta"
                obrigatorio={true}
                placeholder="Ex: 00.000-00" 
                valor={conta}
                aoAlterado={(valor) => setConta(valor)} 
                
                />
                </div>
                
                <label className="data-label">Tipo de conta</label>
                <div className="d-flex">
                    <div className="d-flex box-input_payment align-items-center">
                        <input type="radio" name="accountType" id="contaCorrente"></input>
                        <label className="data-label mb-0">Conta Corrente</label>
                    </div>
                    <div className="d-flex align-items-center box-input_payment">
                        <input type="radio" name="accountType" id="contaPoupanca"></input>
                        <label className="data-label mb-0">Conta Poupança</label>
                    </div>
                    
                </div>
                
            </>
                
            )} 
          </div>
        </div>
    </>
  );
};

export default FormularioBank;
