import React, { useEffect, useState } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import IconSolicitacao from "../componentsStyled/icon/Iconsolicitacao";
import IconEnvio from "../componentsStyled/icon/Iconenvio";
import IconAnaliseDevolucao from "../componentsStyled/icon/Iconanalisedev";
import IconAcompanhe from "../componentsStyled/icon/Iconacompanhe";
import IconReembolso from "../componentsStyled/icon/Iconreembolso";
import IconCheck from "../componentsStyled/icon/Iconcheck";
import axios from "axios";

interface StatusDevolutionProps {
  className?: string;
}

const StatusDevolution: React.FC<StatusDevolutionProps> = ({ className }) => {
  const [data, setData] = useState<DataFollow[] | undefined>(undefined);

  useEffect(() => {
    let auth = localStorage.getItem('auth');

    if(auth) {
      const authObj = JSON.parse(auth);
      console.log(authObj)

      const username = authObj.email;
      const password = authObj.token;
      const customerId = authObj.customerId;
      const text: string = username + ':' + password;
      const encoder: TextEncoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(text);

      // Convert the Uint8Array to a regular array of numbers
      const dataArray: number[] = Array.from(data);

      // Convert the regular array of numbers to a base64 string
      const binaryString: string = String.fromCharCode.apply(null, dataArray);
      const basicAuth: string = btoa(binaryString);

      axios.get(
        `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/27`,
        {
          timeout: 10000,
          headers: {
            'Authorization': 'Basic ' + basicAuth
          }
        }
      )
      .then(function (response) {
        setData(response.data);
        console.log(response.data, "Dados do pedido recebidos com sucesso");
      })
      .catch(function (error) {
        console.log(error, "Erro ao obter dados do pedido");
      });
    }
  }, []);

  return (
    <>
      {console.log(data)}
      {data?.map((item) => (
        <Box
          key={item.id}
          typeBox="datafollow"
          className={`col-md-12 ${className}`}
        >
          <div className="status-icons d-flex align-items-center">
            {item.history.map((step, index) => {
              const IconComponent = getIconComponent(step.title);
              const iconColor = getIconColor(step.status);

              return (
                <>
                  <div className="d-flex flex-column align-items-center container-icon">
                    <div
                      key={index}
                      className="status-icon"
                      style={{
                        backgroundColor: getStatusColor(step.status),
                        border: `1px solid ${getBorderColor(step.status)}`,
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ fill: iconColor }}
                      >
                        <IconComponent />
                      </div>
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
const getIconColor = (status: string): string => {
  switch (status) {
    case "approved":
      return "white";
    case "denied":
      return "white";
    default:
      return "#1C1B1F80";
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
    case "Reembolso":
      return IconReembolso;
    case "Devolução Financeira":
      return IconCheck;
    default:
      return IconAcompanhe;
  }
};
export default StatusDevolution;