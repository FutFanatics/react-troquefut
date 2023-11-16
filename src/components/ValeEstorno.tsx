import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import CardVale from "./cardvale";
import CardEstorno from "./cardestorno";
import { Box } from "../componentsStyled/Box";
import Pix from "./pix";
import BankData from "./BankData";

interface ValeEstornoProps {
 className?: string;
 children?: React.ReactNode;
 onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
 alternarElemento?: () => void;
}

const ValeEstorno: React.FC<ValeEstornoProps> = ({ className }) => {    
 const [activeTab, setActiveTab] = useState("pix");

 const handleClick = (tab: string) => {
    setActiveTab(tab);
 };

 return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="col-md-10 d-flex justify-content-center">
          <Button typeButton="select-estorno" className={activeTab === "pix" ? "active" : ""} onClick={() => handleClick("pix")}>Pix</Button>
          <Button typeButton="select-estorno" className={activeTab === "bankData" ? "active" : ""} onClick={() => handleClick("bankData")}>Dados Bancários</Button>
         
        </div> 
        {activeTab === "pix" && <Pix></Pix>}
        {activeTab === "bankData" && <BankData></BankData>}
      </div>
    </>
 );
};

export default ValeEstorno;