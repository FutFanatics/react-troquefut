
import React, { useState } from "react";
import Pix from "./pix";
import BankData from "./BankData";

interface ValeEstornoProps {
  updateData: (data: any) => void; 
}

const ValeEstorno: React.FC<ValeEstornoProps> = ({ updateData }) => {
  
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

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="col-md-10 d-flex justify-content-center">
          <button
            className={activeTab === "pix" ? "active" : ""}
            onClick={() => handleTabChange("pix")}
          >
            Pix
          </button>
          <button
            className={activeTab === "bankData" ? "active" : ""}
            onClick={() => handleTabChange("bankData")}
          >
            Dados Bancários
          </button>
        </div>
        {activeTab === "pix" && <Pix onDataUpdate={handlePixDataUpdate} />}
        {activeTab === "bankData" && (
          <BankData onDataUpdate={handleBankDataUpdate} />
        )}
      </div>
    </>
  );
};

export default ValeEstorno;
