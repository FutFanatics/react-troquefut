import Button, { ButtonTroque } from "../../components/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './../../css/style.css';
import IconDevolucao from "../../img/icon/inicie.png"
import { BoxIcon, SBoxIconFut } from "../../components/Box";
import { STextParagraph, STitle } from "../../components/Text"; 
import IconFut from "../../components/icon";
import LogoFut from "../../components/icon/LogoFut";
import IconAcompanhe from "../../components/icon/Iconacompanhe";

export default function Home() {
    return (
        <section className="c-home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-content">
                        <LogoFut></LogoFut>
                        <STitle>Troque fut</STitle>
                        <STextParagraph>
                            O TroqueFut é uma plataforma de devoluções da empresa FutFanatics, onde você consegue realizar suas trocas sem  dificuldades e com tecnologias intuitivas.
                        </STextParagraph>
                        <Button path="/instructions" >Iniciar Devolução <BoxIcon><img src={IconDevolucao}/></BoxIcon></Button>
                        <ButtonTroque>Acompanhar sua Devolução <BoxIcon><IconAcompanhe/> </BoxIcon></ButtonTroque>
                        
                    </div>
                    <div className="col-md-6 col-img d-flex justify-content-end align-items-end">
                        <a href="www.futfanatics.com.br">
                            <SBoxIconFut>
                            <IconFut></IconFut>
                            </SBoxIconFut>
                        </a>
                        
                    </div>
                </div>
            </div>
            
        </section>
    )

}