import Button from "../../componentsStyled/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './../../css/style.css';
import IconDevolucao from "../../img/icon/inicie.png"
import { BoxIcon, SBoxIconFut } from "../../componentsStyled/Box";
import { STextParagraph, SspanText } from "../../componentsStyled/Text"; 
import IconFut from "../../componentsStyled/icon";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import IconAcompanhe from "../../componentsStyled/icon/Iconacompanhe";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";
import IconDoor from "../../componentsStyled/icon/Icondoor";

export default function Home() {
    return (
        <>
        <Header></Header>
        <section className="c-home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-content">
                        <TroqueFut width={280} ></TroqueFut>
                        <STextParagraph padding="64px 0px 56px 0px">
                            O TroqueFut é uma plataforma de devoluções da empresa FutFanatics, onde você consegue realizar suas trocas sem  dificuldades e com tecnologias intuitivas.
                        </STextParagraph>
                        <Button path="/instructions" >
                            <IconDoor 
                                fill="white" 
                                width={20}></IconDoor>
                            <span>
                                Solicite uma Devolução  
                            </span> 
                        </Button>
                        <div className="d-flex align-items-center">
                            <hr/>
                                <SspanText>ou</SspanText>
                            <hr/>
                        </div>
                        <Button typeButton="devolucao" path="/devolution"><IconAcompanhe width={25}/> 
                        <span>
                        Acompanhar sua Devolução
                        </span> </Button> 
                    </div>
                    <div className="col-md-6 col-img d-none d-md-flex justify-content-end align-items-end ">
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