import React, { useState, useEffect } from "react";
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

interface HistoryItem {
  title: string;
  date: string;
  fileIcon: string;
  status: string;
}

interface Status {
  title: string;
  status: string;
  msg: string;
  color: string;
}

interface LDN {
  status: boolean;
  url: string;
}

export interface DataFollow {
  id: number;
  order_id: number;
  method_shipment: string | null;
  dateCreatedReturn: string;
  customer: {
    fullname: string;
    fone: string;
    cellphone: string;
    cep: string;
    state: string;
    city: string;
    neigborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  products: Product[];
  history: HistoryItem[];
  status: Status;
  coupon: string;
  ldn: LDN;
}

const FollowData: React.FC<FollowDataProps> = ({ className, devolutionId }) => {
  const [data, setData] = useState<DataFollow[]>([]);

  useEffect(() => {
    if (devolutionId) {
      let auth = localStorage.getItem("auth");

      if (auth) {
        const authObj = JSON.parse(auth);
        const username = authObj.email;
        const password = authObj.token;
        const customerId = authObj.customerId;
        const text: string = username + ":" + password;
        const encoder: TextEncoder = new TextEncoder();
        const data: Uint8Array = encoder.encode(text);

        const dataArray: number[] = Array.from(data);

        const binaryString: string = String.fromCharCode.apply(null, dataArray);
        const basicAuth: string = btoa(binaryString);

        axios
          .get(
            `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/${devolutionId}`,
            {
              timeout: 10000,
              headers: {
                Authorization: "Basic " + basicAuth,
              },
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
    }
  }, [devolutionId]);

  return (
    <>
      {data.map((item) => (
        <Box typeBox="datafollow" className="col-md-4" key={item.id}>
          <h1>Seus Dados</h1>
          <h2>Dados Pessoais</h2>
          <div className="d-flex flex-column">
            <label>Nome completo</label>
            <p>{item.customer.fullname}</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Telefone</label>
              <p>{item.customer.fone || "-"}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Celular</label>
              <p>{item.customer.cellphone}</p>
            </div>
          </div>
          <h2>Endereço</h2>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>CEP</label>
              <p>{item.customer.cep}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Estado</label>
              <p>{item.customer.state}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Cidade</label>
              <p>{item.customer.city}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Bairro</label>
              <p>{item.customer.neigborhood || "-"}</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <label>Endereço</label>
            <p>{item.customer.street}</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column content">
              <label>Número</label>
              <p>{item.customer.number}</p>
            </div>
            <div className="d-flex flex-column content">
              <label>Complemento</label>
              <p>{item.customer.complement || "-"}</p>
            </div>
          </div>
          <h2>Solicitação</h2>
          {item.products.map((product: Product, index: number) => (
            <div className="d-flex justify-content-between" key={index}>
              <div className="d-flex flex-column content">
                <label>Tipo de Reembolso</label>
                <p>{product.refundType}</p>
              </div>
              <div className="d-flex flex-column content">
                <label>Forma de Envio</label>
                <p>{item.method_shipment}</p>
              </div>
            </div>
          ))}
        </Box>
      ))}
    </>
  );
};

export default FollowData;
