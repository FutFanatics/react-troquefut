import { SH1, STextParagraph } from "../componentsStyled/Text";
import IconNull from "../componentsStyled/icon/iconNull";
import Produtos from "./produtos";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductSelected from "./produtoselected";
import { Buffer } from 'buffer';

interface ListaProdutosProps {
  className?: string;
  selectedOption?: string;
  selectedId?: string;
}
interface Produto {
  product_id: string;
  name?: string;
  variant_value?: string;
  price?: string;
  img?: string;
  url?: string;
}
interface Pedido {
  id: string;
  status: string;
  Products: Produto[];
}

const ListaProdutos: React.FC<ListaProdutosProps> = ({
  className,
  selectedId,
}) => {
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  
  useEffect(() => {
    let auth = localStorage.getItem('auth');

    if(auth) {
      const authObj = JSON.parse(auth);
      console.log(authObj)

      const username = authObj.email;
      const password = authObj.token;
      const buffer = Buffer.from(username + ':' + password);
      const basicAuth = buffer.toString('base64');

      axios.get(
        `https://api.troquefuthomologacao.futfanatics.com.br/api/order/get/${selectedId}`,
        {
          timeout: 10000,
          headers: {
            'Authorization': 'Basic ' + basicAuth
          }
        }
      )
      .then(function (response) {
        setPedido(response.data);
        console.log(response.data, "Dados do pedido recebidos com sucesso");
      })
      .catch(function (error) {
        console.log(error, "Erro ao obter dados do pedido");
      });
    }
  }, [selectedId]);
  const onSelectProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };  
  
  return (
    <>
      <hr></hr>
      <section className="c-Lista">
        <div className="container">
          {selectedId ? (
            <SH1
              textAlign="start"
              color="#777777"
              fontWeight={350}
              fontSize="16px"
              fontSizesm="14px"
            >
              Lista de Produtos do Pedido:# {selectedId}
            </SH1>
          ) : (
            <div>
              <SH1
              textAlign="start"
              color="#777777"
              fontWeight={350}
              fontSize="16px"
              marginsm="16px 0px 64px 0px"
              fontSizesm="14px"
            >
              Lista de Produtos do Pedido:# {selectedId}
            </SH1>
              <div className="d-flex flex-column align-items-center">
                <IconNull width={50}></IconNull>
                <div className="">
                  <STextParagraph fontSize="14px" color="#777">
                  Para visualizar os produtos 
                  </STextParagraph>
                  <STextParagraph fontSize="14px" color="#777">
                  selecione um pedido acima 
                  </STextParagraph>
                </div>
              </div>
            </div>
          )}
          <div className="row justify-content-center lista-content flex-column align-items-center">
            <Produtos produtos={pedido?.Products || []}
              selectedId={selectedId || ''} 
              onSelect={() => {}}
              key={1}
            />
          </div>

          {produtoSelecionado && (
            <ProductSelected produto={produtoSelecionado} produtosSelecionados={pedido?.Products} />
          )}
        </div>
      </section>
    </>
  );
};
export default ListaProdutos;
