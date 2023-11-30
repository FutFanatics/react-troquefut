import DatePicker from "../../components/datepicker";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import { Box } from "../../componentsStyled/Box";
import { SH1 } from "../../componentsStyled/Text";
import IconHelp from "../../componentsStyled/icon/Iconhelp";


export default function Devolution() {    
    return (
        <>
        <Header></Header>
        <Menu typeOption="active"></Menu>
        <SH1 textTransform="uppercase" fontSizesm="16px">Selecione qual devolução deseja acompanhar</SH1>
        <section className="c-devolution position-relative">
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa <a href="">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
        <div className="container">
          <ListagemDevolucoes></ListagemDevolucoes>  
        </div>
        </section>
        <Footer></Footer>
        
        </>
    )

}