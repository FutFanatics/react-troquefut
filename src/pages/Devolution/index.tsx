import DatePicker from "../../components/datepicker";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import { SH1 } from "../../componentsStyled/Text";


export default function Devolution() {    
    return (
        <>
        <Header></Header>
        <Menu typeOption="active"></Menu>
        <SH1 textTransform="uppercase">Selecione qual devolução deseja acompanhar</SH1>
        <div className="container">
          <ListagemDevolucoes></ListagemDevolucoes>  
        </div>
        
        </>
    )

}