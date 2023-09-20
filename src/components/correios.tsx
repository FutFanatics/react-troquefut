import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";
import ImgClique from "../img/icon/correios.png"
interface CorreiosProps {
    className?: string;
  }
const Correios : React.FC<CorreiosProps> = ({ className }) => {
    return(
        <div className="container">

            <div className="c-correios row align-items-center flex-column ">
                <Box typeBox="envio" className="col-10 col-md-3">
                    <img src={ImgClique} className="icon"/>
                    
                    <div className="box-text">
                        <li>
                            Ao selecionar o envio pelo clique retire deverá ir até o locker desejado para realizar o auto atendimento;
                        </li>
                        <li>
                            Após a aprovação da devolução receberá um QR code via email para devolução.
                        </li>
                    </div>

                </Box>
                <Button path="/" margin="16px 0px 32px 0px">
                    Avançar
                </Button>
            </div>
                    
        </div>
    )

}
export default Correios;