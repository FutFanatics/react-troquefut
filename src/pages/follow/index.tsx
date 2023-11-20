import DatePicker from "../../components/datepicker";
import FollowData from "../../components/followdata";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import ProgressDevolution from "../../components/progress";
import { Box } from "../../componentsStyled/Box";
import { SH1 } from "../../componentsStyled/Text";
import IconHelp from "../../componentsStyled/icon/Iconhelp";


export default function Follow() {    
    return (
        <>
        <Header></Header>
        <Menu typeOption="active"></Menu>
        <SH1 textTransform="uppercase" margin="16px 0px 32px 0px">Acompanhe sua devolução</SH1>
        <div className="c-follow position-relative">
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa <a href="">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
            <div className="container">
            <div className="row mt-4 mb-4 justify-content-between">
            <FollowData></FollowData>
            <ProgressDevolution></ProgressDevolution>  
            </div>
        </div>
        </div>
        
        
        
        </>
    )

}