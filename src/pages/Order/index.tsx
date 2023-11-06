
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1 } from "../../componentsStyled/Text";
import { useState, useEffect } from 'react';
import Header from "../../components/header";
import Options from "../../components/options";
import ListaProdutos from "../../components/listaprodutos";
import ListaSuspensa from "../../components/listasuspensa";
import axios from 'axios'; 
import Menu from "../../components/menu";

interface Pedido {
    id: string;
    date: string;
  }

export default function Order() {
    const [data, setData] = useState<Pedido[]>([]);
    const [selectedId, setSelectedId] = useState('');
    

    useEffect(()=>
    {
        axios.get('https://api.troquefuthomologacao.futfanatics.com.br/order/list/803542389' ,{
            timeout: 10000,
        })
    
        .then(function(response){
            setData(response.data);
            console.log(response.data)    
        })
        .catch(function(error){
            console.log(error)    
        })
        
    }, []);

    
    const [selectedOption, setSelectedOption] = useState('');
    
    const [isProductSelectedVisible, setIsProductSelectedVisible] = useState(true);
      
    const pedidoOptions = data.map((pedido) => ({
    value: pedido.id,
    label: pedido.id,
    }));
    
    const handleOptionChange = (selectedValue : string) => {
        setSelectedId(selectedValue);
        setIsProductSelectedVisible(false);
      };

    return (
        <>
        <Header></Header>
        <Menu typeOption="active"></Menu>
        <section className="c-order">
           <div className="container">
                <SH1 textTransform="uppercase" fontSize="22px" margin="16px 0px 0px 0px">
                    Selecione O pedido 
                </SH1>
                <ListaSuspensa
                    label="Selecione uma opção"
                    valor={selectedId}
                    items={pedidoOptions} 
                    obrigatorio={true}
                    onChange={handleOptionChange}
                    className="c-lista-suspensa"  
                ></ListaSuspensa>

                <ListaProdutos selectedId={selectedId}></ListaProdutos>  

                <Button margin="0px auto 32px auto" path="/data" typeButton="next" >Avançar</Button>                
            </div>
        </section>
        <Footer></Footer>
        </>
    )

}