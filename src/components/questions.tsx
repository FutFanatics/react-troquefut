import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import IconPicture from "../componentsStyled/icon/IconPicture";
import IconVerifique from "../componentsStyled/icon/IconVerifique";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import IconMotivos from "../componentsStyled/icon/Iconmotivos";

const Question = () =>{
    return(
        <section className="c-question">
        <div className="container">
            <div className="row justify-content-center">
                <Box typeBox ="card-question">
                    <Box typeBox="icon">
                        <IconMotivos width={40}></IconMotivos>
                    </Box>
                    <SH1 fontSize="20px" fontWeight={500} margin="32px 0px 20px 0px">Motivos</SH1>
                    <STextParagraph fontSize="16px" >
                        Nos diga os seus motivos para realizar a troca, assim poderemos atender melhor ao que deseja.
                    </STextParagraph>
                </Box>
                <Box typeBox ="card-question">
                    <Box typeBox="icon">
                    <IconCamera width={40} fill="#1C1B1F"></IconCamera>
                    </Box>
                    <SH1 fontSize="20px" fontWeight={500}margin="32px 0px 20px 0px">Tire uma foto</SH1>
                    <STextParagraph fontSize="16px">
                        Tente capturar o melhor ângulo do produto, em um local iluminado.
                    </STextParagraph>
                </Box>
                <Box typeBox ="card-question">
                    <Box typeBox="icon">
                        <IconVerifique width={40}></IconVerifique>
                    </Box>
                    <SH1 fontSize="20px" fontWeight={500}margin="32px 0px 20px 0px">Verifique os Dados</SH1>
                    <STextParagraph fontSize="16px">
                        Confirme os dados, com eles corretos é só nos enviar e pronto só aguardar nosso retorno.
                    </STextParagraph>
                </Box>
                <Box typeBox ="card-question">
                    <Box typeBox="icon">
                        <IconPicture width={40}></IconPicture>
                    </Box>
                    <SH1 fontSize="20px" fontWeight={500}margin="32px 0px 20px 0px">Tipo de Produto</SH1>
                    <STextParagraph fontSize="16px">
                        Atenção! Não é possível realizar a troca em casos de produtos personalizados ou roupas íntimas.
                    </STextParagraph>
                </Box>
            </div>
            
        </div>
    </section>
    )

}
export default Question;