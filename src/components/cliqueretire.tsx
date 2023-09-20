import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import ImgClique from "../img/icon/cliqueretire.png"
import MapClique from "./mapclique";
import Videoclique from "./videoclique";

interface CliqueRetireProps {
    className?: string;
  }
const CliqueRetire : React.FC<CliqueRetireProps> = ({ className }) => {
    return(
        <>
        <div className="container">
            <div className="c-clique_retire row justify-content-center">
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
            </div>
        </div>
        <SH1 textTransform="uppercase" fontSize="28px" margin="32px 0px 16px 0px">Como funciona o Clique Retire?</SH1>
        <STextParagraph>
            Assista o vídeo abaixo para entender o funcionamento
        </STextParagraph>

        <Videoclique></Videoclique>
        
        <SH1 textTransform="uppercase" fontSize="24px" margin="32px 0px 16px 0px">Escolha o locker em que deseja depositar seu produto</SH1>

        <MapClique></MapClique>

        <Button path="/" margin="32px auto">
        Avançar
        </Button>

        </>
        

    )

}
export default CliqueRetire;