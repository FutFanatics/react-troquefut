import { BoxVideo, SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, SH1, SspanText } from "../../componentsStyled/Text";
import IconCamera from "../../componentsStyled/icon/Iconcamera";
import IconCheck from "../../componentsStyled/icon/Iconcheck";
import IconMotivos from "../../componentsStyled/icon/Iconmotivos";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Options from "../../components/options";
import Question from "../../components/questions";

export default function Instructions() {

    return (
        <>
        <Header></Header>
        <Menu typeOption="active">
            <Options options={[
                { text: 'Instruções do Pedido', path: '/instructions' },
                { text: 'Pedido', path: '/order' },
                { text: 'Dados', path: '/data' },
                { text: 'Formas de envio', path: '/Shipping' },
            ]}/>
        </Menu>
        <section className="c-instruction">
            <BoxVideo>
            </BoxVideo>
            <SH1 textTransform="uppercase" margin="32px 0px">Ficou com alguma dúvida?</SH1>
            <STextParagraph fontWeight={350} margin="32px 0px" >
                Siga os passos abaixo para solicitar a sua troca.
                </STextParagraph>
            <Question></Question>

                <div className="container">
                    <div className="row justify-content-end">
                            <Button color="#192C53" background="transparent" border="1px solid #192c53" path="/order" >Avançar</Button>
                    </div>
                    <Footer></Footer>
                </div>

        </section>
        
        </>
        
    )

}