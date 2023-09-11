import Button, { ButtonTroque } from "../../componentsStyled/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './../../css/style.css';
import IconDevolucao from "../../img/icon/inicie.png"
import { BoxIcon, SBoxIconFut } from "../../componentsStyled/Box";
import { STextParagraph, STitle } from "../../componentsStyled/Text"; 
import IconFut from "../../componentsStyled/icon";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import IconAcompanhe from "../../componentsStyled/icon/Iconacompanhe";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
    return (
        <>
        <Header></Header>
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
        <Footer></Footer>
        </>
    )

}