
import React, { useState } from "react";
import Pix from "./pix";
import BankData from "./BankData";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";

interface ValeEstornoProps {
  updateData: (data: any) => void;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ValeEstorno: React.FC<ValeEstornoProps> = ({ updateData, onCheckboxChange }) => {
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("pix");
  const [pixData, setPixData] = useState<any>(null);
  const [bankData, setBankData] = useState<any>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePixDataUpdate = (data: any) => {
    setPixData(data.pixData);
    updateData(data); 
  };

  const handleBankDataUpdate = (data: any) => {
    setBankData(data.bankData);
    updateData(data); 
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxMarcado(checked);
    onCheckboxChange(event); 
  };

  return (
    <>
      <div className="c-estorno d-flex flex-column align-items-center ">
        <div className="d-flex justify-content-center">
          <Button typeButton="select-estorno"
            className={activeTab === "pix" ? "active" : ""}
            onClick={() => handleTabChange("pix")}
          >
            Pix
          </Button>
          <Button typeButton="select-estorno"
            className={activeTab === "bankData" ? "active" : ""}
            onClick={() => handleTabChange("bankData")}
          >
            Dados Bancários
          </Button>
        </div>
        {activeTab === "pix" && <Pix onDataUpdate={handlePixDataUpdate} />}
        {activeTab === "bankData" && (
          <BankData onDataUpdate={handleBankDataUpdate} />
        )}
        <div className="d-flex mt-3  mb-3 justify-content-start align-items-center">
          <input
            type="checkbox"
            required
            onChange={handleCheckboxChange}
          ></input>
          <STextParagraph
            fontSize="13px"
            fontSizesm="12px"
            padding="0px 0px 0px 8px"
          >
            Ao continuar, você declara que está de acordo com os termos da&nbsp;
            <a
              href="https://www.futfanatics.com.br/politica-de-privacidade"
              target="_blank"
            >
              Política de Privacidade
            </a>
          </STextParagraph>
        </div>
      </div>
    </>
  );
};

export default ValeEstorno;
