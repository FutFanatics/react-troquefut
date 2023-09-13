import { SH1, SspanText } from "../componentsStyled/Text";
import sp from '../img/img-camisa_sp.png';
interface Produto{
    nome: string;
    codigo: string;
    preco: string;
    imagem: string;
    variacao: string;
    url: string;
}

interface ProdutosProps {
    produtos: Produto[];
    className?: string;
  }

const Produtos : React.FC<ProdutosProps> = ({ produtos , className }) => {
    return(
        <>
        {produtos.map((produto, index) => (
        <div className="c-produto d-flex col-md-10">
                <div className="produto-box_img col-md-2">
                    <img src={sp} alt={produto.nome}></img>
                </div>
                <div className="produto-box_text col-md-9 d-flex flex-column justify-content-center">
                    <SH1 fontSize="19px" textAlign="start" fontWeight={600} margin="0px 0px 8px 0px" color="#1D1B20">{produto.nome}</SH1>
                    <div className="row d-flex justify content-between">
                        <div className="col-4">
                            <SspanText fontSize="16px" fontWeight={600} typeOption ='namProduct'>Código: <SspanText fontSize="16px">{produto.codigo}</SspanText></SspanText>
                        </div>
                        <div className="col-8">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Preço: <SspanText fontSize="16px">{produto.preco}</SspanText></SspanText>
                        </div>
                    </div>
                    <div className="row d-flex justify content-between">
                        <div className="col-4">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Variação: <SspanText fontSize="16px"> {produto.variacao}</SspanText></SspanText>
                        </div>
                        <div className="col-8">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Link: <SspanText fontSize="16px">{produto.url}</SspanText></SspanText>
                        </div>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-start justify-content-center pt-2"><input type="checkbox"></input></div>
            </div>
         ))}   
        </>
            
        )
    }
export default Produtos;