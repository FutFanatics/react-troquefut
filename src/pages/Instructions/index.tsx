import { BoxVideo, SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, STitle, STitleHeader } from "../../componentsStyled/Text";
import IconCamera from "../../componentsStyled/icon/Iconcamera";
import IconCheck from "../../componentsStyled/icon/Iconcheck";
import IconMotivos from "../../componentsStyled/icon/Iconmotivos";
import LogoFut from "../../componentsStyled/icon/LogoFut";

export default function Instructions() {

    return (
        <section className="c-instruction">
            <div className="container">
                <div className="c-header w-100">
            <div className="box-img"><LogoFut></LogoFut></div>
            <div className="box-text d-flex justify-content-center">
                <SBox typeBox="optionmenu"
                >
                    <STitleHeader>Instruções do Pedido</STitleHeader>
                </SBox>
                <SBox typeBox="optionmenu-inative"
                >
                    <STitleHeader>Pedido</STitleHeader>
                </SBox>
                <SBox typeBox="optionmenu-inative"
                >
                    <STitleHeader>Dados</STitleHeader>
                </SBox>
                <SBox typeBox="optionmenu-inative"
                >
                    <STitleHeader>Formas de envio</STitleHeader>
                </SBox>

            </div>
                </div>
            </div>
                <BoxVideo>
                    <STitle typeTitle="instruction">Ficou com alguma <STitle typeTitle="sublinhado"> &nbsp;dúvida</STitle> ?</STitle>
                </BoxVideo>
            
                <STextParagraph  typeParagraph="paragraphinstruction">
                Logo abaixo te explicaremos como realizar uma Devolução 
                </STextParagraph>
                
                <SBox>
                  <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-3 box-question">
                            <SBox typeBox="boxicon">
                                <IconMotivos></IconMotivos>
                            </SBox>
                                <div className="box-text">
                                    <STitle typeTitle="duvida">
                                        Motivos 
                                    </STitle>
                                    <STextParagraph typeParagraph= "paragraphduvida">
                                    Nos diga os seus motivos para realizar a troca, assim poderemos atender melhor ao que deseja.
                                    </STextParagraph>

                                </div>
                            </div>
                            <div className="col-md-3 box-question">
                                <SBox typeBox="boxicon">
                                    <IconCamera></IconCamera>
                                </SBox>
                                <div className="box-text">
                                    <STitle typeTitle="duvida">
                                    Tire uma foto 
                                    </STitle>
                                    <STextParagraph typeParagraph= "paragraphduvida">
                                    Tente capturar o melhor ângulo do produto, em um local iluminado.
                                    </STextParagraph>

                                </div>
                            </div>
                            <div className="col-md-3 box-question">
                            <SBox typeBox="boxicon">
                                    <IconCheck></IconCheck>
                                </SBox>
                                <div className="box-text">
                                    <STitle typeTitle="duvida">
                                        Motivos 
                                    </STitle>
                                    <STextParagraph typeParagraph= "paragraphduvida">
                                    Nos diga os seus motivos para realizar a troca, assim poderemos atender melhor ao que deseja.
                                    </STextParagraph>

                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </SBox>
                <div className="container">
                    <div className="row justify-content-end">
                            <Button path="/order" typeButton="next" >Avançar</Button>
                    </div>
                    <Footer></Footer>
                </div>

        </section>
    )

}