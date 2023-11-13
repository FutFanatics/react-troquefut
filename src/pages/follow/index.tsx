import DatePicker from "../../components/datepicker";
import FollowData from "../../components/followdata";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import ProgressDevolution from "../../components/progress";
import { SH1 } from "../../componentsStyled/Text";


export default function Follow() {    
    return (
        <>
        <Header></Header>
        <Menu typeOption="active"></Menu>
        <SH1 textTransform="uppercase" margin="16px 0px 32px 0px">Acompanhe sua devolução</SH1>
        <div className="container">
            <div className="row mt-4 mb-4 justify-content-between">
            <FollowData></FollowData>
            <ProgressDevolution></ProgressDevolution>  
            </div>
        </div>
        
        
        </>
    )

}