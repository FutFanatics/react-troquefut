import React, { useEffect, useState } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import IconSolicitacao from "../componentsStyled/icon/Iconsolicitacao";
import IconEnvio from "../componentsStyled/icon/Iconenvio";
import IconAnaliseDevolucao from "../componentsStyled/icon/Iconanalisedev";
import IconAcompanhe from "../componentsStyled/icon/Iconacompanhe";

interface StatusDevolutionProps {
  className?: string;
}

const StatusDevolution: React.FC<StatusDevolutionProps> = ({ className }) => {
  const [data, setData] = useState<DataFollow[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/acompanhe");
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <Box
          key={item.id}
          typeBox="datafollow"
          className={`col-md-12 ${className}`}
          
        >
          <div className="status-icons d-flex align-items-center">
            {item.history.map((step, index) => {
              const IconComponent = getIconComponent(step.title);

              return (
                <>
                  <div className="d-flex flex-column align-items-center container-icon">
                    <div
                      key={index}
                      className="status-icon"
                      style={{ backgroundColor: getStatusColor(step.status),  
                        border: `1px solid ${getBorderColor(step.status)}` }}
                    >
                      <IconComponent />
                    </div>
                    <span className="name-status">{step.title}</span>
                    <span className="name-date">{step.date || ""}</span>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
          </div>
        </Box>
      ))}
    </>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "approved":
      return "#192c53";
    case "denied":
      return "red";
    default:
      return "transparent";
  }
};
const getBorderColor = (status: string): string => {
    switch (status) {
      case "approved":
        return "#192c53";
      case "denied":
        return "red";
      default:
        return "#00000080";
    }
  };
const getIconComponent = (title: string): React.FC => {
  switch (title) {
    case "Solicitação":
      return IconSolicitacao;
    case "Envio":
      return IconEnvio;
    case "Análise do Produto":
      return IconAnaliseDevolucao;
    default:
      return IconAcompanhe;
  }
};
export default StatusDevolution;
