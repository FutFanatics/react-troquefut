import { SH1 } from "../componentsStyled/Text";
import Produtos from "./produtos";

interface ListaProdutosProps {
    className?: string;
    selectedOption?: string;
  }

const ListaProdutos : React.FC<ListaProdutosProps> = ({ className, selectedOption}) => {
    const produtosData = [
        {
          nome: 'Camisa São Paulo Hype Preta',
          codigo: 'SP123',
          pedido:'344556',
          preco: 'R$29,99',
          imagem: '../img/img-camisa_sp.png',
          variacao: 'M',
          url: 'https://www.futfanatics.com.br/camisa-sao-paulo-hype-preta',
        },

        {
            nome: 'Camisa Flamengo Essay Preta e Vermelha',
            codigo: '121055',
            pedido:'344555',
            preco: 'R$ 299,90',
            imagem: '../img/img-camisa_sp.png',
            variacao: 'M',
            url: 'https://www.futfanatics.com.br/camisa-flamengo-essay-preta-e-vermelha',
          },
    ];
    const filteredProdutosData = produtosData.filter((produto) => produto.pedido === selectedOption);

    return(
        <>
        <hr></hr>
        <section className="c-Lista">
            <div className="container">
                <SH1 textAlign="start" color="#777777" fontWeight={350} fontSize="16px">Lista de Produtos do Pedido:</SH1>
                <div className="row justify-content-center lista-content">
                   <Produtos produtos={filteredProdutosData}></Produtos>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default ListaProdutos

