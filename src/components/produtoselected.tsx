import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import sp from '../img/img-camisa_sp.png';
import { Produto } from './TypeProduct';

interface ProductSelectedProps {
    className?: string;
    produto: Produto | null;
    
  }
const ProductSelected : React.FC<ProductSelectedProps> = ({ produto }) => {
    if (!produto) {
      return null; 
    }
    return(
        <>
        <SH1 fontSize="20px" fontWeight={500} margin="72px 0px 0px 0px ">Preencha a seguir as informações</SH1>          
        <SH1 fontSize="20px" fontWeight={500} margin="0px 0px 32px 0px">dos produto que deseja devolver:</SH1>
        <Box typeBox="productselected" className="col-md-5 ">
            <Box className="flex-column d-flex align-items-center justify-content-center">
                <img src={sp}/>
                <SH1 fontSize="14px" margin="12px 0px 8px 0px" fontWeight={500}>{produto.nome}</SH1>
                <SspanText fontSize="16px">Variação: {produto.variacao}</SspanText>
            </Box>
            <Box>
                <STextParagraph fontSize="15px" color="rgba(56,56,56, 0.7)" fontWeight={350}>*Tipo de Reembolso</STextParagraph>
                <STextParagraph fontSize="15px" color="rgba(56,56,56, 0.7)" fontWeight={350}>*Motivo da Devolução</STextParagraph>
                <STextParagraph fontSize="15px" color="rgba(56,56,56, 0.7)" fontWeight={350}>*Quantidade</STextParagraph>
                <STextParagraph fontSize="15px" color="rgba(56,56,56, 0.7)" fontWeight={350}>Observações</STextParagraph>
            </Box>
        </Box>

        </>
    )

}
export default ProductSelected;