import { SH1 } from "../componentsStyled/Text";
import Produtos from "./produtos";
import axios from 'axios'; 
import { useState, useEffect } from 'react';


interface ListaProdutosProps {
    className?: string;
    selectedOption?: string;
    selectedId?:string;
  }
  interface Produto {
    product_id?: string;
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
  

const ListaProdutos : React.FC<ListaProdutosProps> = ({ className, selectedId}) => {
    const [pedido, setPedido] = useState<Pedido | null>(null)
    const [isProductSelectedVisible, setIsProductSelectedVisible] = useState(false); 


    useEffect(() => {
        axios
          .get(`https://api.troquefuthomologacao.futfanatics.com.br/order/get/${selectedId}`, {
            timeout: 10000,
          })
          .then(function (response) {
            setPedido(response.data);
            console.log(response.data, 'Dados do pedido recebidos com sucesso');
          })
          .catch(function (error) {
            console.log(error, 'Erro ao obter dados do pedido');
          });
      }, [selectedId]);

      

    return(
        <>
        <hr></hr>
        <section className="c-Lista">
            <div className="container">
                <SH1 textAlign="start" color="#777777" fontWeight={350} fontSize="16px">Lista de Produtos do Pedido:</SH1>
                <div className="row justify-content-center lista-content">
                  <Produtos produtos={pedido?.Products || []}></Produtos>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default ListaProdutos

