import React, { useState, useEffect } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import axios from "axios";

interface FollowDataProps {
  className?: string;
  devolutionId?: string;
}
interface Product {
  quant: number;
  price: string;
  refundType: string;
  reasonSub: string;
  reasonMain: string;
  obs: string;
  variant: string;
}
const FollowData: React.FC<FollowDataProps> = ({ className, devolutionId }) => {
  const [followData, setFollowData] = useState<DataFollow[] | undefined>(undefined);

  useEffect(() => {
    if (devolutionId) {
      const auth = localStorage.getItem('auth');
      if (auth) {
        const authObj = JSON.parse(auth);
        const username = authObj.email;
        const password = authObj.token;
        const customerId = authObj.id;
        const text: string = username + ':' + password;
        const encoder: TextEncoder = new TextEncoder();
        const data: Uint8Array = encoder.encode(text);

        const dataArray: number[] = Array.from(data);
        const binaryString: string = String.fromCharCode.apply(null, dataArray);
        const basicAuth: string = btoa(binaryString);

        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/${devolutionId}`, {
              timeout: 10000,
              headers: {
                'Authorization': 'Basic ' + basicAuth
              }
            });

            if (response.status === 200) {
              const data = response.data;
              setFollowData(data);
            } else {
              console.error("Error fetching data:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

        fetchData();
      }
    }
  }, [devolutionId]);

  return (
    <>
      {followData && followData.length > 0 && (
        <Box typeBox="datafollow" className="col-md-4">
          <h1>Seus Dados</h1>
          <h2>Dados Pessoais</h2>
          <div className="d-flex flex-column">
            <label>Nome completo</label>
            <p>{followData[0]?.customer.fullname}</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Telefone</label>
              <p>{followData[0]?.customer.fone || "-"}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Celular</label>
              <p>{followData[0]?.customer.cellphone}</p>
            </div>
          </div>
          <h2>Endereço</h2>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>CEP</label>
              <p>{followData[0]?.customer.cep}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Estado</label>
              <p>{followData[0]?.customer.state}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Cidade</label>
              <p>{followData[0]?.customer.city}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Bairro</label>
              <p>{followData[0]?.customer.neigborhood}</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <label>Endereço</label>
            <p>{followData[0]?.customer.street}</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Número</label>
              <p>{followData[0]?.customer.number}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Complemento</label>
              <p>{followData[0]?.customer.complement || "-"}</p>
            </div>
          </div>
          <h2>Solicitação</h2>
          {followData[0]?.products.map((product: Product, index: number) => (
            <div className="d-flex justify-content-between" key={index}>
              <div className="d-flex flex-column content">
                <label>Tipo de Reembolso</label>
                <p>{product.refundType}</p>
              </div>
              <div className="d-flex flex-column content">
                <label>Forma de Envio</label>
                <p>{followData[0]?.method_shipment}</p>
              </div>
            </div>
          ))}
        </Box>
      )}
    </>
  );
};

export default FollowData;
